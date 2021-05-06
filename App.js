import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colourScheme from './assets/styling/colourScheme';
import Router from './components/Routers/Router';

import GlobalStore from './data/GlobalStore'
import useGeolocation from './hooks/useGeolocation';


const App = () => {
  const location = useGeolocation();

  return (
    <View style={styles.container}>
      <GlobalStore.Provider value={{location}}>
        <Router/>
      </GlobalStore.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    //height:'100vh',
    flex:1,
    backgroundColor: colourScheme.Background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;