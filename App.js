import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './cadastro';
import Login from './login';
import Menu from './menu';
import Desenvolvedores from './desenvolvedores';
import Quemsomos from './quemsomos';
import FiltrosDesastres from './FiltrosDesastres';
import MapaDesastres from './MapaDesastres';
import Dicas from './dicas';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
   ata
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: 'purple'
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu"> 
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
         <Stack.Screen name="Desenvolvedores" component={Desenvolvedores} />
         <Stack.Screen name="Quemsomos" component={Quemsomos} />
         <Stack.Screen name="FiltrosDesastres" component={FiltrosDesastres} />
         <Stack.Screen name="MapaDesastres" component={MapaDesastres} />
         <Stack.Screen name="Dicas" component={Dicas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
