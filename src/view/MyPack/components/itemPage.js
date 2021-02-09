import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
  } from "react-native";
  import {
    windowWidth as WIDTH,
    windowHeight as HEIGHT,
  } from "../../../const/dimention"; 

const itemPage = ({item}) => {
    
    return (
        <View style={styles.post}>
        <View style={{ height:100,borderRadius:5,marginTop:-3 }}>
          <Image
            source={require("../../../../assets/images/img_1.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "stretch",
            }}
          />
        </View>
        <View style={{  marginTop: 20, paddingLeft: 10, height: 30,flexDirection:'row' }}>
        <Image
            source={require("../../../../assets/images/Capture1.png")}
            style={{
              width: 35,
              height: 35,
            //   resizeMode: "stretch",
            }}
          />
          <Image
            source={require("../../../../assets/images/Capture2.png")}
            style={{
              width: 35,
              height: 35,
            //   resizeMode: "stretch",
            }}
          />
          <Image
            source={require("../../../../assets/images/Capture3.png")}
            style={{
              width: 35,
              height: 35,
            //   resizeMode: "stretch",
            }}
          />
        </View>
        <Text style={styles.titlePage}>Vitamin C Plus</Text>
        <View style={styles.green}></View>
        <Text style={styles.contentPage}>{item.description}</Text>
        <Text style={styles.lear}>Lear more</Text>
      </View>
    );
}

export default itemPage;
const styles = StyleSheet.create({
    post: {
        height: 350,
        width: 280,
        marginLeft: 20,
        borderWidth:1,
        borderColor:"#bed0a2",
        borderRadius: 5,
        backgroundColor: "#f7f4eb",
        marginTop:15,
        },
        titlePage:{
            fontSize:22,
            marginTop:10,
            marginLeft:15,
        },
        green:{
            width:100,
            borderWidth:2,
            marginTop:10,
            marginLeft:15,
            borderColor:'#bed0a2'
        },
        contentPage:{
            fontSize:20,
            marginTop:10,
            marginHorizontal:15,
        },
        lear:{
            textDecorationLine: "underline",
            fontSize: 18,
            color: "red",
            marginTop:20,
            marginHorizontal:15,
        },
    });
    