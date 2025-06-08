import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const alertasMock = [
  { id: '1', tipo: 'enchente', local: 'São Paulo' },
  { id: '2', tipo: 'terremoto', local: 'Chile' },
  { id: '3', tipo: 'calor extremo', local: 'Rio de Janeiro' },
  { id: '4', tipo: 'enchente', local: 'Recife' },
];

const FiltrosDesastres = () => {
  const [filtro, setFiltro] = useState(null);

  const alertasFiltrados = filtro
    ? alertasMock.filter(alerta => alerta.tipo === filtro)
    : alertasMock;

  const botoes = [
    { label: 'Todos', valor: null },
    { label: 'Enchente', valor: 'enchente' },
    { label: 'Terremoto', valor: 'terremoto' },
    { label: 'Calor Extremo', valor: 'calor extremo' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filtrar por Desastre</Text>

      <View style={styles.filtros}>
        {botoes.map(btn => (
          <TouchableOpacity
            key={btn.label}
            style={[
              styles.botao,
              filtro === btn.valor && styles.botaoSelecionado,
            ]}
            onPress={() => setFiltro(btn.valor)}
          >
            <Text style={styles.textoBotao}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={alertasFiltrados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.alerta}>
            <Text style={styles.tipo}>{item.tipo.toUpperCase()}</Text>
            <Text style={styles.local}>Local: {item.local}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2ff',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#0077cc',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 5,
  },
  botaoSelecionado: {
    backgroundColor: '#005fa3',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  alerta: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cc0000',
  },
  local: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
});

export default FiltrosDesastres;
