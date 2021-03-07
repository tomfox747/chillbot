import React,{useState} from 'react'
import {View, Text} from 'react-native'
import {Redirect} from 'react-router-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

const DiaryEntryForm1 = () =>{
    const [dailyComplete, setDailyComplete] = useState(false)

    if(!dailyComplete){
        return <Redirect to={"/dailyEntryForm"}/>
    }

    return(
        <View>
            <Text>Diary Entry Form 1</Text>
            <RouteButton path={"/diaryEntryForm2"} text={"Next"} colour={colourScheme.Abstract}/>
        </View>
        
    )
}

export default DiaryEntryForm1