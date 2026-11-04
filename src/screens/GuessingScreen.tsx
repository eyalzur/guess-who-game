import React, { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
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

function questionsLeftText(count: number): string {
  if (count === 0) return '❓ נגמרו השאלות';
  if (count === 1) return '❓ נשארה שאלה אחת';
  return `❓ נשארו ${count} שאלות`;
}

export default function GuessingScreen({ mode, onFinish, onMenu }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [questionsLeft, setQuestionsLeft] = useState(QUESTIONS_LIMIT);
  const [confirmingExit, setConfirmingExit] = useState(false);
  const finishedRef = useRef(false);
  const startRef = useRef(Date.now());
  const pauseStartRef = useRef<number | null>(null);

  const finish = (outcome: Outcome) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinish(outcome);
  };

  // the timer only runs while nothing is blocking the round (e.g. the exit
  // confirmation dialog), so it can never fire out from under that dialog
  useEffect(() => {
    if (mode !== 'time' || confirmingExit) return;
    const tick = () => {
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      const remaining = Math.max(0, TIME_LIMIT_SECONDS - elapsed);
      setSecondsLeft(remaining);
      if (remaining <= 0) finish('timeout');
    };
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [mode, confirmingExit]);

  useEffect(() => {
    if (mode !== 'questions' || confirmingExit) return;
    if (questionsLeft <= 0) {
      finish('outOfQuestions');
    }
  }, [mode, questionsLeft, confirmingExit]);

  const roundInProgress =
    mode === 'time' ? secondsLeft < TIME_LIMIT_SECONDS : questionsLeft < QUESTIONS_LIMIT;

  const requestExit = () => {
    // idempotent: a second trigger while the dialog is already open (e.g. a
    // stray browser-back event) must not re-arm the pause clock
    if (confirmingExit) return;
    if (!roundInProgress) {
      onMenu();
      return;
    }
    pauseStartRef.current = Date.now();
    setConfirmingExit(true);
  };

  const resumeRound = () => {
    if (pauseStartRef.current != null) {
      // shift the wall-clock start forward by however long the dialog was open,
      // so the paused time doesn't count against the countdown
      startRef.current += Date.now() - pauseStartRef.current;
      pauseStartRef.current = null;
    }
    setConfirmingExit(false);
  };

  // on web, the browser/Android back gesture bypasses our on-screen back
  // button entirely (no router involved), which would silently drop an
  // in-progress round with no confirmation. Trap it with a guard history
  // entry and route it through the same requestExit() flow.
  const requestExitRef = useRef(requestExit);
  requestExitRef.current = requestExit;

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const w = globalThis as any;
    if (!w.history?.pushState || !w.addEventListener) return;
    w.history.pushState({ guessingGuard: true }, '');
    const onPopState = () => {
      w.history.pushState({ guessingGuard: true }, '');
      requestExitRef.current();
    };
    w.addEventListener('popstate', onPopState);
    return () => {
      w.removeEventListener('popstate', onPopState);
      // drop the guard entry we pushed so it doesn't linger in history once
      // this screen is gone (round finished, or the user confirmed exit)
      if (w.history.state?.guessingGuard) w.history.back();
    };
  }, []);

  return (
    <View style={styles.container}>
      {!confirmingExit && <BackButton onPress={requestExit} label="עצירת סיבוב" />}
      <View pointerEvents={confirmingExit ? 'none' : 'auto'} style={styles.content}>
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
            <Text style={styles.counter}>{questionsLeftText(questionsLeft)}</Text>
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
              label="עוד שאלה"
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

      {confirmingExit && (
        <View style={styles.backdrop}>
          <View style={styles.confirmBox}>
            <Text style={styles.confirmText}>לצאת באמצע הסיבוב?</Text>
            <View style={styles.confirmColumn}>
              <BigButton label="להמשיך לשחק" onPress={resumeRound} color="#16A34A" />
              <BigButton label="כן, לתפריט" onPress={onMenu} color="#6B7280" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  content: { alignItems: 'center', justifyContent: 'center' },
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
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  confirmBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  confirmText: { fontSize: 18, fontWeight: '700', marginBottom: 10, textAlign: 'center' },
  confirmColumn: { flexDirection: 'column', alignItems: 'center' },
});
