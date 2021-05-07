import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colourScheme from './assets/styling/colourScheme';
import Router from './components/Routers/Router';

import {LocationStore, LoggedInUserStore, RegistrationStore} from './data/GlobalStore'
import useGeolocation from './hooks/useGeolocation';

const App = () => {
  const location = useGeolocation();
  const [loggedInUser, setLoggedInUser] = useState("")
  const [newUser, setNewUser] = useState({})

  return (
    <View style={styles.container}>
      <LocationStore.Provider value={{location}}>
      <LoggedInUserStore.Provider value={{loggedInUser, setLoggedInUser}}>
      <RegistrationStore.Provider value={{newUser, setNewUser}}>
        <Router/>
      </RegistrationStore.Provider>
      </LoggedInUserStore.Provider>
      </LocationStore.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flex:1,
    backgroundColor: colourScheme.Background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;