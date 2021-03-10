import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Link} from 'react-router-native'

import colourScheme from '../../assets/styling/colourScheme'
import {mid} from '../../assets/styling/flexPositions'

const RouteButton = ({path,text,colour}) =>{
    
    const styles = StyleSheet.create({
        routeButton:{
            backgroundColor: !colour ? colourScheme.LightTone : colour,
            borderRadius:5,
            width:'100%',
            height:'100%',
            ...mid
        },
        text:{
            color:'white'
        },
        buttonBody:{
            width:"100%",
            height:"100%",
            ...mid
        }
    })

    return (
        <View style={styles.routeButton}>
            <Link to={path} style={styles.buttonBody}>
                <View>
                    <Text style={styles.text}>
                        {text}
                    </Text>
                </View>
            </Link>
        </View>
    )
}



export default RouteButton