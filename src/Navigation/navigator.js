import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../drawer/Drawer';
import {MyPackStackScreen} from './stack';
import {HomePageStackScreen} from './stack';
import {
  windowWidth as WIDTH,
  windowHeight as HEIGHT,
} from '../const/dimention';
const AppContainer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width:WIDTH}}
     >
        <Drawer.Screen name="HomePageDrawer" component={HomePageStackScreen}/>
        <Drawer.Screen name="MyPack" component={MyPackStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;