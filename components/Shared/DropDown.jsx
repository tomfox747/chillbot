import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Overlay} from 'react-native-elements'

import * as flex from '../../assets/styling/flexPositions'
import colourScheme from '../../assets/styling/colourScheme'

import Row from './Row'
import Col from './Col'

import Arrow from '../../assets/images/arrow.png'

import FunctionButton from '../Shared/FunctionButton'

const DropDown = ({options, setSelected, selected}) =>{
    
    const [expanded, setExpanded] = useState(false);

    const handleSelection = (e) =>{
        setExpanded(false);
        setSelected(e);
    }

    return(
        <View style={styles.body}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.container}>
                <Row>
                    <Col size={7} position={flex.mid}>
                        <Text style={styles.text}>{selected}</Text>
                    </Col>
                    <Col size={3} position={flex.mid}>
                        <Image source={Arrow} style={styles.img}/>
                    </Col>
                </Row>
            </TouchableOpacity>
            {expanded === true &&
                <Overlay isVisible={true} onBackdropPress={() => setExpanded(false)} style={styles.overlay}>
                    <View>
                        <Text>Select a Filter</Text>
                        {
                            options.map((element,index) =>{
                                return(
                                    <TouchableOpacity key={element+index} onPress={(e) => handleSelection(element)} style={styles.dropdown}>
                                        <Text style={styles.text}>{element}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
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
        height:100
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

/**
 * {!expanded
                ?(
                    <TouchableOpacity onPress={(e) => setExpanded(true)} style={styles.dropDown}>
                        <Row>
                            <Col>
                                <View style={{...flex.mid}}>
                                    <Text style={styles.text}>{selected}</Text>
                                </View>  
                            </Col>
                            <Col>
                                <View style={{...flex.mid, height:'100%'}}>
                                    <Image source={Arrow} style={styles.img}/>
                                </View>
                            </Col>
                        </Row>      
                    </TouchableOpacity>
                ):(
                    options.map((element, index) =>{
                        return(
                            <TouchableOpacity key={element+index} onPress={(e) => handleSelection(element)} style={styles.dropdown}>
                                <Row>
                                    <Col>
                                        <View style={{...flex.mid}}>
                                            <Text style={styles.text}>{element}</Text>
                                        </View>
                                    </Col>
                                    <Col>

                                    </Col>
                                </Row>
                            </TouchableOpacity>
                        )   
                    })
                )
                
            }
 * 
 */

export default DropDown