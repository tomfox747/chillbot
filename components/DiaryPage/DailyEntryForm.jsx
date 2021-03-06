import React from 'react'
import {View, Text} from 'react-native'
import {Redirect} from 'react-router-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

const DailyEntryForm = ({completed}) =>{

    if(completed){
        return(
            <Redirect to={"/diaryEntryForm1"}/>
        )
    }

    return(
        <View>
            <Text>
                Daily Entry Page
            </Text>
            <RouteButton path="/diaryEntryForm1" text={"Next"} colour={colourScheme.Abstract}/>
        </View>
    )
}

export default DailyEntryForm