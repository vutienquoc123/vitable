import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import ItemPage from "./itemPage";
import {
  windowWidth as WIDTH,
  windowHeight as HEIGHT,
} from "../../../const/dimention";

const NextPack = () => {
  const data = [
    {
      title: "Vitamin C Plus",
      url: "https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg",
      description:
        "You told us that have dry skin .Our Capitain C helps you brighten it up",
      id: 1,
    },
    {
      title: "Vitamin C Plus",
      url: "https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg",
      description:
        "You told us that have dry skin .Our Capitain C helps you brighten it up.",
      id: 2,
    },
    {
      title: "Vitamin C Plus",
      url:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: 3,
    },
  ];
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, WIDTH * 0.7);
  if (data && data.length) {
    return (
      <View style={styles.container}>
        <View style={styles.delivery}>
          <Text style={styles.textDeliver}>Est.delivery : </Text>
          <Text style={styles.time}>20th February</Text>
        </View>
        <View style={{ width: WIDTH }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => "key" + index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            snapToInterval={WIDTH * 0.75}
            renderItem={({ item }) => {
              return <ItemPage item={item} />;
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />

          <View style={styles.dotView}>
            {data.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: 10,
                    width: 10,
                    backgroundColor: "#595959",
                    margin: 8,
                    borderRadius: 5,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.ButtonLayout}>
          <TouchableOpacity style={styles.ButtonPack}>
            <Text style={styles.MyPack}>Manage My Pack</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default NextPack;
const styles = StyleSheet.create({
  container: { flex: 1 },
  delivery: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  textDeliver: { fontSize: 18 },
  time: {
    textDecorationLine: "underline",
    fontSize: 18,
    color: "red",
  },
  post: {
    height: 350,
    width: 280,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#bed0a2",
    borderRadius: 5,
    backgroundColor: "#f7f4eb",
    marginTop: 15,
  },
  titlePage: {
    fontSize: 22,
    marginTop: 10,
    marginLeft: 15,
  },
  green: {
    width: 100,
    borderWidth: 2,
    marginTop: 10,
    marginLeft: 15,
    borderColor: "#bed0a2",
  },
  contentPage: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 15,
  },
  lear: {
    textDecorationLine: "underline",
    fontSize: 18,
    color: "red",
    marginTop: 20,
    marginHorizontal: 15,
  },
  wrapper: {
    height: HEIGHT * 0.6,
  },
  dotView: { flexDirection: "row", justifyContent: "center" },
  ButtonPack: {
    height: 60,
    width: WIDTH * 0.5,
    backgroundColor: "#F5785A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  MyPack: {
    fontSize: 21,
  },
  ButtonLayout:{
    alignItems: "center",
    marginTop:40,
    marginBottom:40,
  }
});
