import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import AppContainer from './src/Navigation/navigator';
import { NetworkError } from './src/components/NetworkError';
export default function App() {
  // const [isDisconnect, setDisconnect] = useState(false);

  // useEffect(() => {
  //   const unsubcribe = NetInfo.addEventListener((state: any) => {
  //     if (state.isConnected && isDisconnect) {
  //       setDisconnect(false);
  //     } else if (!state.isConnected && !isDisconnect) {
  //       setDisconnect(true);
  //     }
  //   });
  //   return () =>
  //     unsubcribe();
  // }, [isDisconnect]);

  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
