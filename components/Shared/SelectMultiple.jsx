import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Overlay} from 'react-native-elements'

import * as flex from '../../assets/styling/flexPositions'
import colourScheme from '../../assets/styling/colourScheme'

import Row from './Row'
import Col from './Col'

import Arrow from '../../assets/images/arrow.png'

import FunctionButton from './FunctionButton'
import { ScrollView } from 'react-native'

import CheckBox from '../../assets/images/checkBox.png'

const SelectMultiple = ({options, setSelected, selected}) =>{
    
    const [expanded, setExpanded] = useState(false);

    const handleSelection = (e) =>{
        setSelected(e);
    }

    const close = () =>{
        setExpanded(false);
    }

    return(
        <View style={styles.body}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.container}>
                <Row>
                    <Col size={7} position={flex.mid}>
                        <Text style={styles.text}>See Options</Text>
                    </Col>
                    <Col size={3} position={flex.mid}>
                        <Image source={Arrow} style={styles.img}/>
                    </Col>
                </Row>
            </TouchableOpacity>
            {expanded === true &&
                <Overlay isVisible={true} onBackdropPress={() => setExpanded(false)} overlayStyle={styles.overlay}>
                    <Row size={2}>
                        <Col position={flex.mid}>
                            <Text>Select Options</Text>
                        </Col>
                    </Row>
                    <Row size={8}>
                        <Col position={flex.mid}>
                            <ScrollView>
                                {
                                    options.map((element,index) =>{
                                        return(
                                            <TouchableOpacity key={element+index} onPress={(e) => handleSelection(element)} style={styles.dropdown}>
                                                <Row>
                                                    {selected.includes(element) &&
                                                        <Col size={2} position={flex.mid}>
                                                            <Image source={CheckBox} style={{width:30, height:30}}/>
                                                        </Col>
                                                    }
                                                    <Col size={8} position={flex.mid}>
                                                        <Text style={styles.text}>{element}</Text>
                                                    </Col>
                                                </Row>
                                                
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Col>
                    </Row>
                    <Row size={1}></Row>
                    <Row size={2}>
                        <Col position={flex.mid}>
                            <View style={{width:200}}>
                                <FunctionButton value={false} funct={setExpanded} text={"Close"} color={colourScheme.Abstract}/>
                            </View>
                        </Col>
                    </Row>
                </Overlay>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'100%'
    },
    container:{
        height:'100%',
        backgroundColor:colourScheme.LightTone
    },
    dropdown:{
        marginTop:5,
        ...flex.mid,
        height:40,
        width:200,
        backgroundColor:colourScheme.LightTone,
        borderRadius:5,
    },
    overlay:{
        height:'70%',
        width:'80%'
    },
    text:{
        ...flex.mid,
        color:'white'
    },
    img:{
        width:15,
        height:12
    }
})

export default SelectMultiple