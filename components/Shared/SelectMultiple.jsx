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
                <Overlay isVisible={true} onBackdropPress={() => setExpanded(false)} style={styles.overlay}>
                    <Row>
                        <Col position={flex.mid}>
                            <Text>Select a Filter</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col position={flex.mid}>
                            <ScrollView>
                                {
                                    options.map((element,index) =>{
                                        return(
                                            <TouchableOpacity key={element+index} onPress={(e) => handleSelection(element)} style={styles.dropdown}>
                                                <Text style={styles.text}>{element}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Col>
                    </Row>
                    <Row>
                        <Col position={flex.mid}>
                            <FunctionButton value={false} funct={setExpanded} text={"Close"} color={colourScheme.Abstract}/>
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
        height:80
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