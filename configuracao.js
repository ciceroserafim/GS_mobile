import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Configuracao() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    console.log("Usuário saiu da conta");
    
  };

  const handleDeleteAccount = () => {
  Alert.alert(
    "Excluir Conta",
    "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          console.log("Conta excluída");
          
          // Redireciona para a tela de Cadastro e limpa o histórico de navegação
          navigation.reset({
            index: 0,
            routes: [{ name: "Cadastro" }] 
          });
        }
      }
    ]
  );
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações da Conta</Text>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Feather name="log-out" size={20} color="#e0f2ff" />
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteAccount}>
        <MaterialIcons name="delete-outline" size={20} color="#ff4d4f" />
        <Text style={[styles.buttonText, { color: "#ff4d4f" }]}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#0a1d40", 
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#a3c9f9",
    marginBottom: 32,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1e3a8a",
    gap: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "#e0f2ff",
    fontWeight: "bold",
  },
  deleteButton: {
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: "#1e3a8a",
    paddingTop: 16,
  },
});
