import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View,Image, Animated,TouchableOpacity } from 'react-native';
import styleExterno from './styles.js';
import { render } from 'react-dom';

const icamento = ()=>{
    return(
        <View>
            <Image style={{width:50,height:50}} source={{uri:'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg'}}/>
        </View>
    );
}

