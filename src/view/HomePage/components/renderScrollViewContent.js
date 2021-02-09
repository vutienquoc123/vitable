import React from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    Image,
    TouchableOpacity,
  } from "react-native";
  import {
    windowWidth as WIDTH,
    windowHeight as HEIGHT,
  } from "../../../const/dimention"; 
  import DailyTracker from './DailyTracker'
const HEADER_MAX_HEIGHT = 220;
const renderScrollViewContent = () => {
    return (
        <View style={styles.scrollViewContent}>
        <View style={styles.trasit}>
            <TouchableOpacity style={styles.NextPack}>
                <Text style={styles.Textchange}>Daily Tracker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InTransit}>
                <Text style={styles.Textchange}>Process</Text>
            </TouchableOpacity>
        </View>
        <DailyTracker/>
      </View>
    );
}

export default renderScrollViewContent;
const styles = StyleSheet.create({
    scrollViewContent: {
        paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
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
        borderTopRightRadius:10,
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