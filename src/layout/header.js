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
import { SimpleLineIcons } from "@expo/vector-icons";  
const header = (props) => {
    return (
        <Animated.View
        style={[
          styles.bar,
          {
            transform: [{ scale: props.titleScale }, { translateY: props.titleTranslate }],
          },
        ]}
      >
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
          <SimpleLineIcons
            name="menu"
            size={40}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View style={styles.iconRight}>
          <Image
            source={require("../../assets/images/char.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textChar}>{props.nameTrack.name}</Text>
        </View>
      </Animated.View>
    );
}

export default header;
const styles = StyleSheet.create({
    bar: {
        backgroundColor: "transparent",
        marginTop: Platform.OS === "ios" ? 28 : 38,
        height: 32,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: "white",
        fontSize: 18,
      },
      iconRight: {
        height: 50,
        width: 160,
        marginRight: -10,
        backgroundColor: "#f7f4eb",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        flexDirection: "row",
        alignItems: "center",
      },
      textChar: {
        fontSize: 18,
        marginLeft: 10,
      },
})