import React from 'react'
import {View, Text} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

import Header from '../Shared/Header'


const DiaryPage = ({entryAdded}) =>{

    if(entryAdded){
        alert("New Diary Entry Added")
    }

    return(
        <View>
            <Header Text={'Diary Main Page'} BackButton={{Route:'/home',HeaderText:'Home'}}/>
            <RouteButton path={"/diaryEntryForm1"} text={"New Diary Entry"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/viewEntriesPage"} text={"View Diary Entries"} colour={colourScheme.LightTone}/>
        </View>
    )
}

export default DiaryPage