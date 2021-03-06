import React from 'react'
import {View, Text} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import RouteButton from '../Shared/RouteButton'

import Header from '../Shared/Header'

const HomePage = () =>{

    return(
        <View>
            <Header Text={"HomePage"}/>
            <RouteButton path={"/"} text={"Logout"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/diaryPage"} text={"Your Diary"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/calmZoneSetupPage"} text={"Calm Zone"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/settingsPage"} text={"Settings"} colour={colourScheme.LightTone}/>
        </View>
    )
}

export default HomePage