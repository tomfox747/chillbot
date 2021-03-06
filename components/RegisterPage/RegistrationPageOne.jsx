import React from 'react'
import {View,Text} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import RouteButton from '../Shared/RouteButton'

const RegistrationPageOne = () =>{
    return(
        <View>
            <RouteButton path={"/"} text={"Cancel"} colour={colourScheme.Abstract}/>
            <RouteButton path={"/registerPage2"} text={"Continue"} colour={colourScheme.Abstract}/>
            <Text>Registration page 1</Text>
        </View>
    )
}

export default RegistrationPageOne