import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { criarAlerta } from '../GS/services/AlertaService';

const CadastroAlerta = () => {
  const [tipoDesastre, setTipoDesastre] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nivel, setNivel] = useState('');
  const [localizacaoId, setLocalizacaoId] = useState('');
  const [dataOcorrencia, setDataOcorrencia] = useState('');

  const handleCadastro = async () => {
    if (!tipoDesastre || !descricao || !nivel || !localizacaoId || !dataOcorrencia) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const alerta = {
      tipoDesastre,
      descricao,
      nivel,
      localizacaoId: parseInt(localizacaoId),
      dataOcorrencia,
    };

    try {
      await criarAlerta(alerta);
      Alert.alert('Sucesso', 'Alerta cadastrado com sucesso!');
      setTipoDesastre('');
      setDescricao('');
      setNivel('');
      setLocalizacaoId('');
      setDataOcorrencia('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível cadastrar o alerta.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Tipo de Desastre</Text>
      <TextInput
        style={styles.input}
        value={tipoDesastre}
        onChangeText={setTipoDesastre}
        placeholder="Ex: enchente"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descreva o alerta"
      />

      <Text style={styles.label}>Nível (BAIXO, MÉDIO, ALTO)</Text>
      <TextInput
        style={styles.input}
        value={nivel}
        onChangeText={setNivel}
        placeholder="Ex: ALTO"
      />

      <Text style={styles.label}>ID da Localização</Text>
      <TextInput
        style={styles.input}
        value={localizacaoId}
        onChangeText={setLocalizacaoId}
        placeholder="Ex: 1"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data da Ocorrência</Text>
      <TextInput
        style={styles.input}
        value={dataOcorrencia}
        onChangeText={setDataOcorrencia}
        placeholder="YYYY-MM-DDTHH:mm:ss"
      />

      <Button title="Cadastrar Alerta" onPress={handleCadastro} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});

export default CadastroAlerta;