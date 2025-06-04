import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const alertasExemplo = [
  { id: '1', tipo: 'enchente', latitude: -23.55052, longitude: -46.63331 },
  { id: '2', tipo: 'terremoto', latitude: -33.4489, longitude: -70.6693 },
  { id: '3', tipo: 'calor extremo', latitude: -22.9068, longitude: -43.1729 },
];

export default function MapaDesastres() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log('Status da permissão:', status);

      if (status !== 'granted') {
        alert('Permissão de localização negada.');
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        console.log('Localização obtida:', currentLocation);
        setLocation(currentLocation.coords);
      } catch (error) {
        console.error('Erro ao obter localização:', error);
      }
    })();
  }, []);

  if (!location) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {/* Localização do usuário */}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Você está aqui"
          pinColor="blue"
        />

        {/* Marcadores de alertas */}
        {alertasExemplo.map((alerta) => (
          <Marker
            key={alerta.id}
            coordinate={{
              latitude: alerta.latitude,
              longitude: alerta.longitude,
            }}
            title={alerta.tipo.toUpperCase()}
            pinColor="red"
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    flex: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
