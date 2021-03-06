import React from 'react'
import {View, Text} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import RouteButton from '../Shared/RouteButton'

const DiaryEntryForm2 = () =>{

    return(
        <View>
            <Text>Diary Entry Form 2</Text>
            <RouteButton path={"/diaryEntryForm1"} text={"Previous"} colour={colourScheme.Abstract}/>
            <RouteButton path={"/diaryEntryForm3"} text={"Next"} colour={colourScheme.Abstract}/>
        </View>
    )
}

export default DiaryEntryForm2