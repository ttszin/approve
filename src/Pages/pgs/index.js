// src/Page1.js

import React from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Constants } from 'expo';


export default function pgs() {
  return(
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
});