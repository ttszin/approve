import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text,Image, Animated,TouchableOpacity,ScrollView,KeyboardAvoidingView,TextInput  } from 'react-native';
import Routes from "./src/routes.js";
import 'react-native-gesture-handler';
import styleExterno from './styleLogin.js';
import * as OpenAnything from 'react-native-openanything';
import { useFonts } from 'expo-font';
import {FuzzyBubbles_400Regular,FuzzyBubbles_700Bold,} from '@expo-google-fonts/fuzzy-bubbles';
import AppLoading from 'expo-app-loading';
import {db} from './firebase.js';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator()

LogBox.ignoreAllLogs();

export default function App(){
  const[ fontsLoaded ] = useFonts({
    FuzzyBubbles_400Regular,
    FuzzyBubbles_700Bold
  });

  if(!fontsLoaded){
      <AppLoading/>
  }
  
  const [counter, setCounter] = useState(0);
	const [password, SetPassword] = useState('Insira a senha aqui');
	var senha = 'riogrande.123';
  console.disableYellowBox = true;
  if (counter===1 && password===senha){
    
    
    //HEADER DAS REDES SOCIAIS
    return(
      <NavigationContainer>
          <Routes/>
      </NavigationContainer>
    );

  }else{
    return(

        <View style={styleExterno.fundo}>
            <View style={{alignItems:'center',borderColor:'#006bbd',borderWidth:3,borderRadius:30,marginTop:'2%'}}>
              <Text style={styleExterno.texto2}>INFORMAÇÕES DO DESENVOLVEDOR</Text>
              <View style={{flexDirection:'row', margin:5,borderColor:'#028cf5',borderWidth:3,justifyContent:'center',width:'50%',backgroundColor:'#fff',borderRadius:20,marginBottom:15}}>
                <TouchableOpacity style ={{margin:10,flexDirection:'column',alignItems:'center',marginRight:15}}onPress={() => OpenAnything.Web('https://github.com/ttszin')}>
                  <Image style={{width:50,height:50,backgroundColor:'transparent',marginBottom:2}} source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25231.png'}}/>
                  <Text>GitHub</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{margin:10,flexDirection:'column',alignItems:'center',marginLeft:15}}>
                  <Image style={{width:50,height:50,backgroundColor:'transparent',marginBottom:2}} source={{uri:'https://cdn-icons-png.flaticon.com/512/145/145807.png'}}/>
                  <Text>Linked in</Text>
                </TouchableOpacity>
              </View>
          </View>
            <View style={{flex:1,height:'100%',justifyContent:'center',marginBottom:'5%'}}>
              <KeyboardAvoidingView contentContainerStyle={styleExterno.box} behavior="position" enabled>
                <StatusBar hidden = {true}/>
                <Text style={styleExterno.texto}>Bem vindo ao APPROVE</Text>
                <View style={{flexDirection:'column'}}>
                  <Text style={styleExterno.texto2}>Digite a senha para acessar o conteúdo</Text>
                  <View style={{flexDirection:'row',marginBottom:30,justifyContent:'center',alignContent:'center'}}>
                    <TextInput 
                      style = {styleExterno.textoinput}
                      placeholder = 'Insira a senha aqui'
                      placeholderTextColor={'white'}
                      onChangeText={(val) => SetPassword(val)}
                                
                    />
                    {/*<Text style={{paddingBottom:25,color:'white'}}>Senha Inserida : {password}</Text> */}
                  

                    <Button
                      buttonStyle={styleExterno.buttonLogin}
                      title="ENTRAR"	 
                      onPress={
                        () =>  setCounter(1)
                      }
                    />  
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View> 
          </View>
    );
  }
  
}