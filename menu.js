import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

<Image source={require('./assets/mundo_branco.png')} 
style={{ width: 200, height: 235 }} 
/>

      <Text style={styles.nome}>Caution Event</Text>

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

       <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Desenvolvedores')}>
        <Text style={styles.textoBotao}>Dicas</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1d40',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  nome: {fontSize: 50,
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
