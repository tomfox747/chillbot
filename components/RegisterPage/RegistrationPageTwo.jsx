import React from 'react'
import {View, Text, Button} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import RouteButton from '../Shared/RouteButton'

const RegistrationPageTwo = () =>{

    return(
        <View>
            <RouteButton path={"/registered"} text={"Complete"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/"} text={"Cancel"} colour={colourScheme.Abstract}/>
            <RouteButton path={"/registerPage1"} text={"Back"} colour={colourScheme.Abstract}/>
            <Text>Registration page 2</Text>
        </View>
    )
}

export default RegistrationPageTwo