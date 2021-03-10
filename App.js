import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colourScheme from './assets/styling/colourScheme'
import Router from './components/Routers/Router'

const App = () => {
  return (
    <View style={styles.container}>
      <Router/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    height:'100vh',
    backgroundColor: colourScheme.Background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;