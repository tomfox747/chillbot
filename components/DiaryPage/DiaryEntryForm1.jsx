import React,{useState, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useHistory} from 'react-router-native'
import colourScheme from '../../assets/styling/colourScheme'
import {NewDiaryEntryStore} from '../../data/GlobalStore'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import TextInput from '../Shared/TextInput'
import RouteButton from '../Shared/RouteButton'
import Slider from '../Shared/Slider'
import FunctionButton from '../Shared/FunctionButton'

const DiaryEntryForm1 = () =>{
    const history = useHistory() 
    let {newDiaryEntry, setNewDiaryEntry} = useContext(NewDiaryEntryStore)

    const rowSizes = [
        12,8,5,10,2,5,30,10,10,8
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [stateOfMind, setStateOfMind] = useState(null)
    const [moodDescription, setMoodDescription] = useState("")

    const next = () =>{
        setNewDiaryEntry({
            ...newDiaryEntry,
            stateOfMind:stateOfMind,
            moodDescription:moodDescription
        })
        history.push('/diaryEntryForm2')
    }

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Your Mental Health Diary, new entry"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How would you rate your overall state of mind?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider selected={stateOfMind} setSelected={setStateOfMind}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        Give me a brief description of your mood
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={moodDescription} setValue={setMoodDescription}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path={"/diaryPage"} text={"Back"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <FunctionButton funct={next} text={"Next"} color={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
        </View>    
    )
}

const styles= StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default DiaryEntryForm1