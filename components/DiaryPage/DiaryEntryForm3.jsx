import React from 'react'
import {View, Text} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

const DiaryEntryForm3 = () =>{

    return(
        <View>
            <Text>Diary Entry Form 3</Text>
            <RouteButton path={"/diaryEntryForm2"} text={"Previous"} colour={colourScheme.Abstract}/>
            <RouteButton path={"/diaryEntrySubmitted"} text={"Complete"} colour={colourScheme.Abstract}/>
        </View>
    )
}

export default DiaryEntryForm3