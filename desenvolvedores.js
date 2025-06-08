import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Desenvolvedores() {
  const membros = [
    {
      nome: 'Cícero Gabriel Oliveira Serafim',
      rm: '556996',
      funcao: 'Desenvolvedor de Apps Mobile | Iot',
      imagem: '',
    },
    {
      nome: 'Eduardo Miguel Forato Monteiro',
      rm: '555871',
      funcao: 'Desenvolvedor Backend',
      imagem: '',
    },
    {
      nome: 'Alice Teixeira Caldeira',
      rm: '556293',
      funcao: 'UX/UI Designer | PL/SQl',
      imagem: '',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Título com imagem */}
      <View style={styles.header}>
        <Image
          source={require('./assets/pessoas.png')}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>
      </View>

      {/* Cartões dos membros */}
      {membros.map((membro, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: membro.imagem }} style={styles.avatar} />
          <View>
            <Text style={styles.nome}>{membro.nome}</Text>
            <Text style={styles.funcao}>{membro.funcao}</Text>
            <Text style={styles.rm}>{membro.rm}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1d40',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#142d5c',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  funcao: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  rm: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 4,
  },
});
