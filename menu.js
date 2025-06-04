import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <Image source={require('./assets/mundo_branco.png')} 
          style={{ width: 200, height: 235 }} 
        />

        <Text style={styles.nome}>Safe Zone</Text>

        <Text style={styles.titulo}>Menu Principal</Text>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textoBotao}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Desenvolvedores')}>
          <Text style={styles.textoBotao}>Desenvolvedores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Quemsomos')}>
          <Text style={styles.textoBotao}>Quem somos?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dicas')}>
          <Text style={styles.textoBotao}>Dicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('FiltrosDesastres')}>
          <Text style={styles.textoBotao}>Filtro de Desastres</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MapaDesastres')}>
          <Text style={styles.textoBotao}>Mapa de Desastres</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a1d40',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  nome: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 12,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
