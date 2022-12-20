// src/Page1.js

import React from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';

export default function search() {
  return(
    <View style={styles.container}>
      <Text>Search ;D</Text>
      <Button 
        title="Ir para About"
        onPress={() => navigation.navigate('About') }
      />
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