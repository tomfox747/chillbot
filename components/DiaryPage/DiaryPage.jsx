import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import RouteButton from '../Shared/RouteButton'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Dropdown from '../Shared/DropDown'

const testOptions = ["option 1","option 2","option 3"];

const DiaryPage = ({entryAdded}) =>{

    const rowSizes = [
        12,3,9,5,9
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b))}

    const [selected, setSelected] = useState(testOptions[0]);

    if(entryAdded){
        alert("New Diary Entry Added")
    }

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={'Your Mental Health Diary'} BackButton={{Route:'/home'}}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            
            {/*entry button*/}
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <RouteButton path={"diaryEntryForm1"} text={"New Entry"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}></Row>

            <Row size={rowSizes[4]}>
                <Col size={1}></Col>
                <Col size={3}>
                    <Text>Filter by :</Text>
                </Col>
                <Col size={7}>
                    <Dropdown options={testOptions} setSelected={setSelected} selected={selected}/>
                </Col>
                <Col size={1}></Col>
            </Row>

            {
                /*<RouteButton path={"/diaryEntryForm1"} text={"New Diary Entry"} colour={colourScheme.LightTone}/>
                <RouteButton path={"/viewEntriesPage"} text={"View Diary Entries"} colour={colourScheme.LightTone}/>*/
            }
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        flex:1
    }
})

export default DiaryPage