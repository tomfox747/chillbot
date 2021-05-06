import React,{useContext} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {HeaderTextLight} from '../../assets/styling/textStyles'
import {mid, midRow} from '../../assets/styling/flexPositions'
import {Link} from 'react-router-native'
import Row from './Row'
import Col from './Col'

import GlobalStore from '../../data/GlobalStore';

import BackImage from '../../assets/images/back.png'
import LogoImage from '../../assets/images/Logo.png'

const Header = ({BackButton, HeaderText}) =>{
    
    const {location} = useContext(GlobalStore);

    return(
        <View style={styles.body}>
            <Row>
                {!BackButton && <Col size={1}></Col>}
                {BackButton
                    ?(
                        <Col size={4} position={midRow}>
                            <Link to={BackButton.Route} style={styles.backButton}>
                                <View><Image source={BackImage} style={styles.image}/></View>
                            </Link>
                        </Col>
                    )
                    :(
                        <Col size={4} position={midRow}>
                            <Image source={LogoImage} style={styles.image}/>
                        </Col>
                    )
                }
                <Col size={1}></Col>
                <Col size={20} position={midRow}>
                    {/*<Text style={styles.text}>{HeaderText}</Text>*/}
                    <Text style={styles.text}>Latitude - {location.latitude} Longitude - {location.longitude}</Text>
                </Col>
                <Col size={1}></Col>
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
        height:'100%',
        marginTop:20
    },
    image:{
        ...midRow,
        height:50,
        width:50
    },
    backButton:{
        ...midRow,
        height:'100%',
        width:'100%',
        backgroundColor:colourScheme.Abstract
    }
})

export default Header