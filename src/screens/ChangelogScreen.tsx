import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import { CHANGELOG } from '../data/changelog';

type Props = {
  onMenu: () => void;
};

export default function ChangelogScreen({ onMenu }: Props) {
  return (
    <View style={styles.container}>
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
      <BigButton label="🏠 תפריט" onPress={onMenu} color="#6B7280" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 24, paddingTop: 48 },
  title: { fontSize: 34, fontWeight: '900', marginBottom: 16, textAlign: 'center' },
  list: { width: '100%', maxWidth: 420, flexGrow: 0 },
  listContent: { paddingBottom: 16 },
  entry: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  version: { fontSize: 18, fontWeight: '800', color: '#7C3AED' },
  date: { fontSize: 13, color: '#9CA3AF' },
  change: { fontSize: 15, color: '#374151', textAlign: 'right', marginBottom: 4, lineHeight: 20 },
});
