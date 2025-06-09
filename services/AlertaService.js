import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.118:8080/', 
});

export const listarAlertas = async () => {
  const response = await api.get('/alertas');
  return response.data.content; 
};

export const criarAlerta = async (alerta) => {
  return api.post('/alertas', alerta);
};

export const atualizarAlerta = async (id, alerta) => {
  return api.put(`/alertas/${id}`, alerta);
};

export const deletarAlerta = async (id) => {
  return api.delete(`/alertas/${id}`);
};
