import React,{useState} from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'

const ScrollableList = ({type, list}) =>{
    
    return(
        <ScrollView scrollEnabled={true} style={styles.body}>
            {list.map((element,index) =>{
                    return(
                        React.createElement(
                            type,
                            {props: element.props }
                        )
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default ScrollableList