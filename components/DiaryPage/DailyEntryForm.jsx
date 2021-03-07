import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import Slider from '../Shared/Slider'
import RouteButton from '../Shared/RouteButton'

const DailyEntryForm = () =>{
    const rowSizes = [
        12,13,5,6,7,7,7,8,5,8,6,10,6
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error : Row sizes = " + rowSizes.reduce((a,b) => a + b))}

    const [sleep, setSleep] = useState(0)
    const [exercise, setExercise] = useState(0)
    const [work, setWork] = useState(0)

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}><Col><Header HeaderText={"Your mental health diary (new entry)"}/></Col></Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How much sleep did you get last night?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider setValue={setSleep}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How much exercise have you done today?
                    </Text>
                </Col>
                <Col size={1}>
                </Col>
            </Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider setValue={setExercise}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How much work have you done today?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider setValue={setWork}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[10]}></Row>
            <Row size={rowSizes[11]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path="/home" text={"Cancel"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <RouteButton path="/diaryEntryForm1" text={"Next"} colour={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[12]}></Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default DailyEntryForm