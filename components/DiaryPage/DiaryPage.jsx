import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'

const DiaryPage = ({entryAdded}) =>{

    const rowSizes = [
        12,14,11,3,11,3,11,35
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b))}

    if(entryAdded){
        alert("New Diary Entry Added")
    }

    return(
        <View style={styles.body}>
            <Header Text={'Diary Main Page'} BackButton={{Route:'/home',HeaderText:'Home'}}/>
            <RouteButton path={"/diaryEntryForm1"} text={"New Diary Entry"} colour={colourScheme.LightTone}/>
            <RouteButton path={"/viewEntriesPage"} text={"View Diary Entries"} colour={colourScheme.LightTone}/>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        flex:1
    }
})

export default DiaryPage