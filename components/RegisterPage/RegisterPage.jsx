import React,{useState} from 'react'
import {View, Text} from 'react-native'

import {NativeRouter, Route, Link} from 'react-router-native'
import RouteButton from '../Shared/RouteButton'

const RegisterPage = () =>{    

    return(
        <View>
            <RouteButton path={"/"} text={"Cancel"}/>
            <Link to="/">
                <View>
                    <Text>Cancel</Text>
                </View>
            </Link>
            <Text>This is the Registration Page</Text>
        </View>
    )
}

export default RegisterPage