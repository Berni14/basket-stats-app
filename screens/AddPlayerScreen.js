import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddPlayerScreen({ navigation }) {
  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo Jugador</Text>
      <TextInput
        placeholder="Nombre del jugador"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <Button title="Guardar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, fontSize: 18 },
});
