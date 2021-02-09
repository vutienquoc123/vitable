import React from "react";
import { View, StyleSheet, Image, TouchableOpacity,Text,StatusBar} from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import {
  windowWidth as WIDTH,
  windowHeight as HEIGHT,
} from "../const/dimention";
import { FONT_21 } from "../themes/fontSize.tsx";
import { Entypo } from "@expo/vector-icons";
export default function DrawerContent({ navigation }, props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2ede0",
        width: WIDTH
      }}
    >
      <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0)"
          // hidden={true}
        />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: WIDTH * 0.9,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.closeDrawer()}
                style={{ width: 50, textAlign: "center", marginTop: 10 }}
              >
                <Ionicons name="close" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate("HomePage");
                }} >
                <Image
                  source={require("../../assets/images/Logo.png")}
                  style={{
                    width: 40,
                    height: 40,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
              <View></View>
            </View>
          </View>
          <Drawer.Section style={{ marginTop: HEIGHT * 0.1 }}>
            <DrawerItem
              label="Tracking my vitamins"
              onPress={() => {
                navigation.navigate("HomePage");
              }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />

            <DrawerItem
              label="My pack"
              onPress={() => {
                navigation.navigate("MyPack");
              }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />

            <DrawerItem
              label="Brower our shop"
              // onPress={() => {
              //   navigation.navigate("MyPack");
              // }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />

            <DrawerItem
              label="My profile"
              // onPress={() => {
              //   navigation.navigate("MyPack");
              // }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />
            <View
              style={{
                width: WIDTH * 0.9,
                borderColor: "#dcd2bd",
                borderWidth: 1,
                marginTop: HEIGHT * 0.04,
                marginBottom: HEIGHT * 0.04,
                marginHorizontal: 20,
              }}
            ></View>
            <DrawerItem
              label="Support / Help"
              // onPress={() => {
              //   navigation.navigate("MyPack");
              // }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />
            <DrawerItem
              label="Accout details"
              // onPress={() => {
              //   navigation.navigate("MyPack");
              // }}
              labelStyle={{
                fontSize: FONT_21,
                color: "black",
                marginLeft: -30,
              }}
              icon={({ color, size }) => (
                <Entypo
                  name="chevron-thin-right"
                  size={35}
                  color="black"
                  style={{ position: "absolute", right: 10, opacity: 0.7 }}
                />
              )}
            />
          </Drawer.Section>
          <Drawer.Section style={{ backgroundColor:"#637c5a",marginTop:HEIGHT*0.05 }}>
              <View style={{ padding:25 }}>
                <Text style={{color:"#f2ede0",fontSize:FONT_21}}>Want to ajust your plan?</Text>
                <Text style={{color:"#f2ede0",fontSize:19,textDecorationLine:'underline'}}>Retake the quiz</Text>
              </View>
          </Drawer.Section >
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {},
  title: {
    fontSize: 18,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 15,
    color: "black",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
