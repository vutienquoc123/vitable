import React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  import {
    windowWidth as WIDTH,
    windowHeight as HEIGHT,
  } from "../../../const/dimention";  
  import NextPack from './NextPack'
const HEADER_MAX_HEIGHT = 300;
export default function renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        <View style={styles.trasit}>
            <TouchableOpacity style={styles.InTransit}>
                <Text style={styles.Textchange}>In transit pack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.NextPack}>
                <Text style={styles.Textchange}>Next pack</Text>
            </TouchableOpacity>
        </View>
        <NextPack/>
      </View>
    );
}
const styles = StyleSheet.create({
    scrollViewContent: {
        paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        justifyContent: "center",
      },
    trasit: {
        flexDirection: "row",
        height:50,
        backgroundColor:"#dcd2bd",
        justifyContent:'space-around'
    },
    NextPack:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f7f4eb',
        width:WIDTH*0.5,
        borderTopLeftRadius:10,
    }, 
    InTransit:{
        justifyContent: 'center',
        alignItems: 'center',
        width:WIDTH*0.5,
    },
    Textchange:{
        fontSize: 18,
    } 

})