import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/BackButton';
import BigButton from '../components/BigButton';
import CardBack from '../components/CardBack';
import { GameMode, Outcome, QUESTIONS_LIMIT, TIME_LIMIT_SECONDS } from '../game/types';

type Props = {
  mode: GameMode;
  onFinish: (outcome: Outcome) => void;
  onMenu: () => void;
};

function timerColor(secondsLeft: number): string {
  if (secondsLeft <= 10) return '#DC2626';
  if (secondsLeft <= 30) return '#F59E0B';
  return '#16A34A';
}

export default function GuessingScreen({ mode, onFinish, onMenu }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [questionsLeft, setQuestionsLeft] = useState(QUESTIONS_LIMIT);
  const [confirmingExit, setConfirmingExit] = useState(false);
  const finishedRef = useRef(false);
  const startRef = useRef(Date.now());

  const finish = (outcome: Outcome) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinish(outcome);
  };

  useEffect(() => {
    if (mode !== 'time') return;
    const tick = () => {
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = Math.max(0, TIME_LIMIT_SECONDS - elapsed);
      setSecondsLeft(remaining);
      if (remaining <= 0) finish('timeout');
    };
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [mode]);

  useEffect(() => {
    if (mode !== 'questions') return;
    if (questionsLeft <= 0) {
      finish('outOfQuestions');
    }
  }, [mode, questionsLeft]);

  const requestExit = () => {
    if (mode === 'time' || questionsLeft < QUESTIONS_LIMIT) {
      setConfirmingExit(true);
    } else {
      onMenu();
    }
  };

  return (
    <View style={styles.container}>
      {confirmingExit ? (
        <View style={styles.confirmBox}>
          <Text style={styles.confirmText}>לצאת באמצע הסיבוב?</Text>
          <View style={styles.confirmRow}>
            <BigButton label="כן, לתפריט" onPress={onMenu} color="#DC2626" />
            <BigButton label="להמשיך לשחק" onPress={() => setConfirmingExit(false)} color="#6B7280" />
          </View>
        </View>
      ) : (
        <BackButton onPress={requestExit} />
      )}
      <CardBack size={180} />

      {mode === 'time' ? (
        <>
          <Text style={[styles.counter, { color: timerColor(secondsLeft) }]}>
            ⏱️ {secondsLeft}
          </Text>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${(secondsLeft / TIME_LIMIT_SECONDS) * 100}%`,
                  backgroundColor: timerColor(secondsLeft),
                },
              ]}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.counter}>❓ נשארו {questionsLeft} שאלות</Text>
          <View style={styles.dotsRow}>
            {Array.from({ length: QUESTIONS_LIMIT }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i < questionsLeft ? styles.dotActive : styles.dotUsed,
                ]}
              />
            ))}
          </View>
          <BigButton
            label="נשאלה שאלה"
            onPress={() => setQuestionsLeft((q) => Math.max(0, q - 1))}
            color="#F59E0B"
          />
        </>
      )}

      <View style={styles.row}>
        <BigButton label="✅ ניצחון!" onPress={() => finish('win')} color="#16A34A" />
        <BigButton label="✋ עצור" onPress={() => finish('stop')} color="#DC2626" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  counter: { fontSize: 32, fontWeight: '900', marginVertical: 16 },
  progressTrack: {
    width: 240,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E5E7EB',
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: { height: '100%', borderRadius: 7 },
  dotsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
    maxWidth: 260,
  },
  dot: { width: 18, height: 18, borderRadius: 9 },
  dotActive: { backgroundColor: '#F59E0B' },
  dotUsed: { backgroundColor: '#E5E7EB' },
  row: { flexDirection: 'row', gap: 12, marginTop: 20, flexWrap: 'wrap', justifyContent: 'center' },
  confirmBox: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  confirmText: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  confirmRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
});
