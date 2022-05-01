import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function Home(){

return(
    <View style={styles.screen}>
        <Text style={styles.oneFourth}>Hello world</Text>
        <Text style={styles.oneFourth}>Hello world</Text>
        <Text style={styles.oneFourth}>Hello world</Text>
        <Text style={styles.oneFourth}>Hello world</Text>
        
    </View>
);

}


const styles = StyleSheet.create({

    screen:{

        // flexDirection:'row'
        // flex : the space the view should take , here 1 = 100%
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    oneFourth:{
        flex:1
    }



})