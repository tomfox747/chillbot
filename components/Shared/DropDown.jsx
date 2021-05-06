import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import textStyles from '../../assets/styling/textStyles.js'
import * as flex from '../../assets/styling/flexPositions'
import colourScheme from '../../assets/styling/colourScheme'

import Row from './Row'
import Col from './Col'

import Arrow from '../../assets/images/arrow.png'

const DropDown = ({options, setSelected, selected}) =>{
    
    const [expanded, setExpanded] = useState(false);

    const handleSelection = (e) =>{
        setExpanded(false);
        setSelected(e);
    }

    return(
        <View style={styles.body}>
            {!expanded
                ?(
                    <View style={styles.dropDown}>
                        <TouchableOpacity  onPress={(e) => setExpanded(true)}>
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
                    </View>
                    
                ):(
                    <View style={styles.dropdown}>
                        {
                            options.map((element, index) =>{
                                return(
                                    <TouchableOpacity key={element+index} onPress={(e) => handleSelection(element)} >
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
                        }
                    </View>
                )
                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'auto',
        position:'absolute',
        width:'100%',
        backgroundColor:colourScheme.LightTone,
        ...flex.mid,
        borderRadius:5,
    },
    text:{
        ...textStyles,
        ...flex.mid
    },
    img:{
        width:15,
        height:12
    }
})

export default DropDown