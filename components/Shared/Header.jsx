import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {HeaderTextLight} from '../../assets/styling/textStyles'
import {mid, midRow} from '../../assets/styling/flexPositions'
import {Link} from 'react-router-native'
import Row from './Row'
import Col from './Col'

import BackImage from '../../assets/images/back.png'
import LogoImage from '../../assets/images/Logo.png'

const Header = ({BackButton, HeaderText}) =>{
    
    return(
        <View style={styles.body}>
            <Row>
                {BackButton
                    ?(
                        <Col size={1} position={midRow}>
                            <Link to={BackButton.Route} style={styles.backButton}>
                                <View><Image source={BackImage} style={styles.image}/></View>
                            </Link>
                        </Col>
                    )
                    :(
                        <Col size={1} position={midRow}>
                            <Image source={LogoImage} style={styles.image}/>
                        </Col>
                    )
                }
                <Col size={4} position={midRow}>
                    <Text style={styles.text}>{HeaderText}</Text>
                </Col>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        ...mid,
        backgroundColor:colourScheme.Primary,
        height:"100%"
    },
    text:{
        ...HeaderTextLight,
        ...midRow,
        height:'100%'
    },
    image:{
        ...midRow,
        height:'50px',
        width:"50px"
    },
    backButton:{
        ...midRow,
        height:'100%',
        width:'100%',
        backgroundColor:colourScheme.Abstract
    }
})

export default Header