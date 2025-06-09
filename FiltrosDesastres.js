import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { listarAlertas } from './services/AlertaService'; 

const FiltrosDesastres = () => {
  const [filtro, setFiltro] = useState(null);
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    carregarAlertas();
  }, []);

  const carregarAlertas = async () => {
    try {
      const dados = await listarAlertas();
      setAlertas(dados);
    } catch (error) {
      console.error('Erro ao carregar alertas:', error);
    }
  };

  const alertasFiltrados = filtro
    ? alertas.filter(alerta => alerta.tipoDesastre.toLowerCase() === filtro)
    : alertas;

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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.alerta}>
            <Text style={styles.tipo}>{item.tipoDesastre.toUpperCase()}</Text>
            <Text style={styles.local}>
              Local: {item.localizacao?.cidade ?? 'Não informado'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FiltrosDesastres;