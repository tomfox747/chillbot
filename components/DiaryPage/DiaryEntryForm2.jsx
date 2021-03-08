import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import Header from '../Shared/Header'
import Col from '../Shared/Col'
import Row from '../Shared/Row'
import FunctionButton from '../Shared/FunctionButton'
import RouteButton from '../Shared/RouteButton'
import TextInput from '../Shared/TextInput'

const DiaryEntryForm2 = () =>{
    const rowSizes = [
        12,5,5,8,10,5,30,10,8,7
    ]
    if (rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [location, setLocation] = useState(null)
    const [activity, setActivity] = useState(null)

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header BackButton={{Route:'/diaryPage'}} HeaderText={"Your mental health diary, new entry"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <Text>Where are you at the moment?</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <FunctionButton text={"Get Location"} value={{x:0,y:0}} funct={setLocation}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <Text>What are you up to? (select multiple)</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <ActivityComponent size={rowSizes[6]} funct={setActivity}/>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path={"/diaryEntryForm1"} text={"Prev"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <RouteButton path={"/diaryEntryForm3"} text={"Next"} colour={colourScheme.Abstract}/>
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

const ActivityComponent = ({size, funct}) =>{
    return(
        <Row size={size}>
            <Col size={1}></Col>
            <Col size={20}>
                <Row size={20}>
                    <Col size={20}><FunctionButton text={"Nothing Much"} value={"Nothing Much"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Working"} value={"Working"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Doing Chores"} value={"Doing Chores"} funct={funct}/></Col>
                </Row>
                <Row size={2}></Row>
                <Row size={20}>
                    <Col size={20}><FunctionButton text={"Chillin Alone"} value={"Chilling Alone"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Socialising"} value={"Socialising"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Listening to Music"} value={"Listening to Music"} funct={funct}/></Col>
                </Row>
                <Row size={2}></Row>
                <Row size={20}>
                    <Col size={20}><FunctionButton text={"Watching TV"} value={"Watching TV"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Watching Youtube"} value={"Watching Youtube"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Playing Games"} value={"Playing Games"} funct={funct}/></Col>
                </Row>
                <Row size={2}></Row>
                <Row size={20}>
                    <Col size={20}><FunctionButton text={"On Your Phone"} value={"On Your Phone"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Exercising"} value={"Exercising"} funct={funct}/></Col>
                    <Col size={1}></Col>
                    <Col size={20}><FunctionButton text={"Other"} value={"Other"} funct={funct}/></Col>
                </Row>
            </Col>
            <Col size={1}></Col>
        </Row> 
    )
}

export default DiaryEntryForm2