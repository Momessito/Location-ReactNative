import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Você não aceitou');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      {location ? (
        <Text style={{color:'white'}}>
          Sua localização é: {location.coords.latitude}, {location.coords.longitude}
        </Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
