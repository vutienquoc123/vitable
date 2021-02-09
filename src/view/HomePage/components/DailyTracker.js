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
    Modal,
  } from "react-native";
  import {
    windowWidth as WIDTH,
    windowHeight as HEIGHT,
  } from "../../../const/dimention"; 
  import { Ionicons } from '@expo/vector-icons'; 
const DailyTracker = () => {
    return (
    <View style={styles.Day}>
        <View style={styles.trasit}>
            <TouchableOpacity style={styles.NextPack}>
                <Text style={styles.Textchange}>7 days</Text>
                <View style={styles.BrDay}></View>
                <Text style={styles.TextStreack}>Current streak</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.NextPack}>
                <Text style={styles.Textchange}>32 days</Text>
                <View style={styles.BrDay}></View>
                <Text style={styles.TextStreack}>Best streak</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Point}>
            <View style={styles.PointLeft}>
                <Text style={styles.points}>8.000<Text style={{ fontSize:15 }}>points</Text></Text>
                <Text style={styles.get}>/ 10,000 points</Text>
                <View style={styles.green}>
                    <View style={{ width:120,borderWidth:3,borderColor:'#637c5a' }}></View>
                    <View style={{ width:30,borderWidth:3,borderColor:'#bed0a2' }}></View>
                </View>
                <Text style={styles.extra}>Earn extra points</Text>
            </View>
            <View style={styles.PointRight}>
                <Ionicons name="ios-pricetags-outline" size={30} color="black" />
                <Text style={styles.get}>Get-10$</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextButton}>I've taken my vitamins today</Text>
        </TouchableOpacity>
        <Text style={{ color:"red",opacity:0.5,marginBottom:50 }}>+ 200 points</Text>

    </View>
    );
}

export default DailyTracker;
const styles = StyleSheet.create({
    trasit: {
        flexDirection: "row",
        height:70,
        marginTop:10,
        backgroundColor:'#f7f4eb',
        justifyContent:'space-around'
    },
    NextPack:{
        justifyContent: 'center',
        alignItems: 'center',
        width:WIDTH*0.5,
        borderTopRightRadius:10,
    }, 
    Textchange:{
        fontSize: 25,
        color: "#637C5A"
    }, 
    Day:{
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
    },
    BrDay:{
        width:80,
        marginTop:15,
        borderWidth:1,
        borderColor:'#637C5A'
    },
    TextStreack:{
        fontSize:15,
    },
    Point:{
        height:180,
        marginTop:15,
        width:WIDTH*0.9,
        borderWidth:1,
        borderColor:'#BED0A2',
        borderRadius:5,
        flexDirection: "row",
        justifyContent:'space-around',
    },
    points:{
        fontSize:30,
        color:'#BED0A2',
        marginTop:25,
        marginBottom:5,
    },
    PointRight:{
        height:100,
        width:100, 
        alignItems:"center",
        justifyContent:'center',
        borderRadius:50,
        borderWidth:1, 
        opacity:0.2,
        marginTop:25,
    },
    get:{
        fontSize:13,
    },
    green:{flexDirection:'row',marginTop:15},
    extra:{
        marginTop:10,
        textDecorationLine: "underline",
    },
    Button:{
        height:50,
        width:WIDTH*0.7,
        backgroundColor:'#F5785A',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
        marginBottom:10,
        borderWidth:1,
    },
    TextButton:{
        fontSize:18
    }
})