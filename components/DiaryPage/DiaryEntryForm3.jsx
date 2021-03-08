import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {mid} from '../../assets/styling/flexPositions'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import TextInput from '../Shared/TextInput'
import FunctionButton from '../Shared/FunctionButton'
import RouteButton from '../Shared/RouteButton'

const DiaryEntryForm3 = () =>{
    const rowSizes=[
        12,5,5,10,5,10,10,10,10,8
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [names, setNames] = useState(["tom","sam"])

    const handleSetNames = (value) =>{
        setNames = [...names, value]
    }

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Your Mental Health Diary Log, new entry"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Text>
                        Who are you with?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Row>
                        <Col>
                            <NamesComponent setNames={handleSetNames}/>
                        </Col>
                        <Col>
                            {
                                names.map((name, index) =>{
                                    return <Text key={'name'+index} style={{textAlign:'center'}}>{name}</Text>
                                })
                            }
                        </Col>    
                    </Row>    
                </Col>
                <Col size={1}>
                </Col>
                
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path={"/diaryEntryForm2"} text={"Previous"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <RouteButton path={"/diaryEntrySubmitted"} text={"Complete"} colour={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        height:'100%'
    }
})

const NamesComponent = ({size,setNames}) =>{
    const [name, setName] = useState('Name input')

    return(
        <View style={{height:'100%'}}>
            <Row>
                <Col>
                    <TextInput value={name} setValue={setName}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FunctionButton text={"Add"} value={name} funct={setNames}/>
                </Col>
            </Row>
        </View>
    )
}

export default DiaryEntryForm3