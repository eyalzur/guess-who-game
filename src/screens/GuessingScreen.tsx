import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import CardBack from '../components/CardBack';
import { GameMode, Outcome, QUESTIONS_LIMIT, TIME_LIMIT_SECONDS } from '../game/types';

type Props = {
  mode: GameMode;
  onFinish: (outcome: Outcome) => void;
};

export default function GuessingScreen({ mode, onFinish }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [questionsLeft, setQuestionsLeft] = useState(QUESTIONS_LIMIT);
  const finishedRef = useRef(false);

  const finish = (outcome: Outcome) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinish(outcome);
  };

  useEffect(() => {
    if (mode !== 'time') return;
    if (secondsLeft <= 0) {
      finish('timeout');
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [mode, secondsLeft]);

  useEffect(() => {
    if (mode !== 'questions') return;
    if (questionsLeft <= 0) {
      finish('timeout');
    }
  }, [mode, questionsLeft]);

  return (
    <View style={styles.container}>
      <CardBack size={180} />

      {mode === 'time' ? (
        <Text style={styles.counter}>⏱️ {secondsLeft}</Text>
      ) : (
        <>
          <Text style={styles.counter}>❓ נשארו {questionsLeft} שאלות</Text>
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
  row: { flexDirection: 'row-reverse', gap: 12, marginTop: 20, flexWrap: 'wrap', justifyContent: 'center' },
});
