import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const alertasMock = [
  { id: '1', tipo: 'enchente', local: 'São Paulo' },
  { id: '2', tipo: 'terremoto', local: 'Chile' },
  { id: '3', tipo: 'calor extremo', local: 'Rio de Janeiro' },
  { id: '4', tipo: 'enchente', local: 'Recife' },
];

export default function FiltrosDesastres() {
  const [filtro, setFiltro] = useState(null);

  const alertasFiltrados = filtro
    ? alertasMock.filter(alerta => alerta.tipo === filtro)
    : alertasMock;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filtrar por desastre</Text>

      <View style={styles.filtros}>
        <Button title="Todos" onPress={() => setFiltro(null)} />
        <Button title="Enchente" onPress={() => setFiltro('enchente')} />
        <Button title="Terremoto" onPress={() => setFiltro('terremoto')} />
        <Button title="Calor Extremo" onPress={() => setFiltro('calor extremo')} />
      </View>

      <FlatList
        data={alertasFiltrados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.alerta}>
            <Text>{item.tipo.toUpperCase()} - {item.local}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  filtros: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  alerta: { padding: 10, backgroundColor: '#eee', marginBottom: 10 },
});
