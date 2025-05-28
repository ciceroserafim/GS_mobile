import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Quemsomos() {
 const navigation = useNavigation();
 return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🛡️ Sobre Nós – Caution Event</Text>

      <Text style={styles.texto}>
        Na era dos eventos climáticos extremos, acreditamos que a informação rápida, confiável e acessível pode salvar vidas.
        O <Text style={styles.destaque}>Caution Event</Text> nasceu com esse propósito: ser um aliado das pessoas em momentos
        de crise ambiental e desastres naturais.
      </Text>

      <Text style={styles.texto}>
        Somos um time multidisciplinar de jovens desenvolvedores apaixonados por inovação, tecnologia e impacto social.
        Nosso objetivo é criar soluções digitais inteligentes que ajudam comunidades a se prepararem, reagirem e se recuperarem
        diante de fenômenos como enchentes, calor extremo, terremotos e outros eventos extremos da natureza.
      </Text>

      <Text style={styles.texto}>
        No Caution Event, conectamos dados em tempo real, alertas geolocalizados, dicas de prevenção e rotas de emergência
        em uma única plataforma intuitiva e acessível para todos.
      </Text>

      <Text style={styles.subtitulo}>💡 Missão</Text>
      <Text style={styles.texto}>
        Usar a tecnologia para proteger vidas, promover a resiliência e fortalecer a resposta da sociedade diante dos desafios do novo cenário climático global.
      </Text>

      <Text style={styles.subtitulo}>🌍 Visão</Text>
      <Text style={styles.texto}>
        Ser referência em soluções digitais para gestão e prevenção de eventos extremos, integrando pessoas, instituições e dados de forma eficiente e humana.
      </Text>

      <Text style={styles.subtitulo}>🤝 Valores</Text>
      <Text style={styles.texto}>
        Inovação com propósito, empatia, responsabilidade social, acessibilidade e trabalho em equipe.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0a1d40',
    flexGrow: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7dd3fc',
    marginTop: 20,
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'justify',
    marginBottom: 10,
    lineHeight: 22,
  },
  destaque: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
});