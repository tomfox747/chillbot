import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import RouteButton from '../Shared/RouteButton'
import Slider from '../Shared/Slider'

const RegistrationPageTwo = () =>{
    const rowSizes = [
        12,5,5,7,5,10,5,5,10,5,5,10,5,6,5
    ]
    if(rowSizes.reduce((a,b) => a+b) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a+b))}

    const [stateOfMind, setStateOfMind] = useState(0)
    const [sleep, setSleep] = useState(0)
    const [energy, setEnergy] = useState(0)

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Register"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        Optional - Tell us a bit about yourself and your mental health...
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}></Row>
            <Row size={rowSizes[4]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How would you rate your overall state of mind
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider
                        setValue={setEnergy}
                    />
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}></Row>
            <Row size={rowSizes[7]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How well do you usually sleep?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider
                        setValue={setEnergy}
                    />
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
            <Row size={rowSizes[10]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>
                        How much energy do you have during the day?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Slider
                        setValue={setEnergy}
                    />
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[12]}></Row>
            <Row size={rowSizes[13]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path={"/registerPage1"} text={"Back"} colour={colourScheme.Abstract}/>                        
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <RouteButton path={"/registered"} text={"Register"} colour={colourScheme.Abstract}/>                        
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[14]}></Row>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1
    }
})

export default RegistrationPageTwo