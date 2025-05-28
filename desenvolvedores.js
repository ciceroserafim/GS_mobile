import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Desenvolvedores() {
  const membros = [
    {
      nome: 'Cícero Gabriel Oliveira Serafim',
      rm: '556996',
      funcao: 'Desenvolvedor Frontend',
      imagem: '',
    },
    {
      nome: 'Eduardo Miguel Forato Monteiro',
      rm: '555871',
      funcao: 'Desenvolvedor Backend',
      imagem: '',
    },
    {
      nome: 'Alice',
      rm: '########',
      funcao: 'UX/UI Designer',
      imagem: '',
    },
  ];

  
return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
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
  rm:{
 fontSize: 10,
    color: '#ccc',
    marginTop: 4

  }
});