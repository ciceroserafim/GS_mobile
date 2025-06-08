import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function Dicas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🧭 Dicas de Segurança em Eventos Extremos</Text>

      <Text style={styles.introducao}>
        A segurança começa com a informação. Reunimos orientações simples e eficazes
        para te ajudar a se proteger em diferentes situações de risco.
      </Text>

      <View style={styles.bloco}>
        <Text style={styles.subtitulo}>🌊 Em caso de Enchentes:</Text>
        <Text style={styles.texto}>• Evite áreas alagadas e não atravesse ruas com correnteza.</Text>
        <Text style={styles.texto}>• Desligue a energia elétrica se a água estiver subindo.</Text>
        <Text style={styles.texto}>• Mantenha documentos e itens essenciais em local elevado.</Text>
        <Text style={styles.texto}>• Busque abrigo seguro e siga orientações oficiais.</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.subtitulo}>🔥 Em caso de Calor Extremo:</Text>
        <Text style={styles.texto}>• Hidrate-se com frequência, mesmo sem sentir sede.</Text>
        <Text style={styles.texto}>• Evite esforços físicos entre 10h e 16h.</Text>
        <Text style={styles.texto}>• Use roupas leves e proteja-se do sol.</Text>
        <Text style={styles.texto}>• Cuidado com sinais de insolação: tontura, náusea, confusão mental.</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.subtitulo}>🌎 Em caso de Terremotos:</Text>
        <Text style={styles.texto}>• Abrigue-se sob móveis firmes e proteja a cabeça.</Text>
        <Text style={styles.texto}>• Afaste-se de janelas, espelhos e objetos soltos.</Text>
        <Text style={styles.texto}>• Após o tremor, vá para áreas abertas, longe de construções.</Text>
        <Text style={styles.texto}>• Evite elevadores e siga rotas de evacuação.</Text>
      </View>

      <Text style={styles.encerramento}>
        Fique atento aos alertas da SafeZone e, sempre que possível, compartilhe essas informações com sua comunidade.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4ff', 
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    maxWidth: 700,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0a1d40', 
    textAlign: 'center',
    marginBottom: 20,
  },
  introducao: {
    fontSize: 16,
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  bloco: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#00000020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0a1d40',
  },
  texto: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 6,
  },
  encerramento: {
    fontSize: 16,
    color: '#1f2937',
    textAlign: 'center',
    marginTop: 30,
  },
});
