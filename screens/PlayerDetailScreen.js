import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { RadarChart } from 'react-native-chart-kit';

export default function PlayerDetailScreen({ route }) {
  const stats = [78, 65, 72, 80, 70, 75]; // valores de ejemplo

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carlos García</Text>
      <RadarChart
        data={{
          labels: ['Tiro', 'Defensa', 'Pase', 'Velocidad', 'Dribling', 'Físico'],
          datasets: [{ data: stats }]
        }}
        width={Dimensions.get('window').width - 40}
        height={350}
        chartConfig={{
          backgroundColor: '#fff',
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
});
