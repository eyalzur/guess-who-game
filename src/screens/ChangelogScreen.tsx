import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import ScreenBackground from '../components/ScreenBackground';
import { CHANGELOG } from '../data/changelog';
import { COLORS, FONTS, RADIUS } from '../theme';

type Props = {
  onMenu: () => void;
};

export default function ChangelogScreen({ onMenu }: Props) {
  return (
    <ScreenBackground style={styles.container}>
      <Text style={styles.title}>מה חדש? 🆕</Text>
      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {CHANGELOG.map((entry) => (
          <View key={entry.version} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.version}>גרסה {entry.version}</Text>
              <Text style={styles.date}>{entry.date}</Text>
            </View>
            {entry.changes.map((change, i) => (
              <Text key={i} style={styles.change}>
                {'•'} {change}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
      <BigButton label="🏠 תפריט" onPress={onMenu} color={COLORS.gray} />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-start', paddingTop: 48 },
  title: { fontSize: 32, fontFamily: FONTS.display, color: COLORS.ink, marginBottom: 16, textAlign: 'center' },
  list: { width: '100%', maxWidth: 420, flexGrow: 0 },
  listContent: { paddingBottom: 16 },
  entry: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  version: { fontSize: 18, fontFamily: FONTS.displayBold, color: COLORS.purple },
  date: { fontSize: 13, color: COLORS.gray, fontFamily: FONTS.body },
  change: {
    fontSize: 15,
    color: COLORS.inkSoft,
    fontFamily: FONTS.body,
    textAlign: 'right',
    marginBottom: 4,
    lineHeight: 20,
  },
});
