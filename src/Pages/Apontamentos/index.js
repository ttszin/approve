// src/Page1.js

import React, { useEffect, useState } from 'react';
import { View, Button, Text,StyleSheet,TextInput,Alert,TouchableOpacity,FlatList  } from 'react-native';
import {db} from '../../../firebase.js';
import styleExterno from '../../../styles.js'
//import {Picker} from '@react-native-picker/picker';
import { Ionicons,  AntDesign} from '@expo/vector-icons';
//import { defined } from 'react-native-reanimated';
import { LogBox } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import 'firebase/compat/firestore';
import AppLoading from 'expo-app-loading';
// Import fonte Roboto
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';


export default function apontamentos({route,navigation}) {

  const[ fontsLoaded ] = useFonts({
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if(!fontsLoaded){
    <AppLoading/>
  }

  const [matricula,setMatricula] = useState('');

  LogBox.ignoreAllLogs();

  const [orderNumber, setOrderNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [text, setText] = useState('');
  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [apontamentos, setApontamentos] = useState([]);



  
//===============================================FUNÇÕES DO HORÁRIO========================================================
  const showStartTimePicker = () => {
    setStartTimePickerVisible(true);
    setStartTimePickerVisible(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisible(false);
    setStartTimePickerVisible(false);
  };

  const handleStartTimeConfirm = (selectedTime) => {
    if (selectedTime) {
      setStartTime(selectedTime);
      hideStartTimePicker();

    }
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisible(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisible(false);
  };

  const handleEndTimeConfirm = (selectedTime) => {
    if (selectedTime) {
      setEndTime(selectedTime);
      hideEndTimePicker();
    }
  };
//==============================================FUNÇÃO QUE ENVIA OS CAMPOS PARA O FIREBASE==================================
                                                  
  const handleSubmit = async () => {
    try {
      await db.collection('apontamentos').add({
        orderNumber,
        registrationNumber,
        startTime: startTime ? startTime.toString() : null,
        endTime: endTime ? endTime.toString() : null,
        text,
      });

      Alert.alert('Sucesso', 'As informações foram registradas no Firebase.');
      // Limpar campos após o registro
      setOrderNumber('');
      setRegistrationNumber('');
      setStartTime(new Date());
      setEndTime(new Date());
      setText('');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao registrar as informações: ' + error.message);
    }
  };

//==========================================================================================================================
  

  const searchAccess = () => {
      
  }


  return (
    <View style={{ gap:20,flex:1,paddingTop:"20%", paddingHorizontal: "5%",flexDirection:'column',alignItems:'center',backgroundColor:'#fff' }}>
      <View style={{gap:10,width:'100%',flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
        <Text style={styleExterno.textos_desc}>Insira o número da ordem : </Text>
        <TextInput
          style={styleExterno.inputsstyle}
          placeholder="Número da ordem"
          value={orderNumber}
          onChangeText={setOrderNumber}
        />
      </View>
      <View style={{gap:10,width:'100%',flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:500}}>Insira o número de matrícula : </Text>
        <TextInput
          style={styleExterno.inputsstyle}
          placeholder="Número de matrícula"
          value={registrationNumber}
          onChangeText={setRegistrationNumber}
        />
      </View>
     
    

      {/*BOTÃO PARA MOSTRAR O SELETOR DE HORÁRIO INICIAL*/}

      <View style={{gap:10,width:'100%',flexDirection:'row',alignContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:500}}>Selecione a hora inicial :</Text>
        <TouchableOpacity style={styleExterno.buttonsellecttime} onPress={showStartTimePicker}>
	  	    <AntDesign name="clockcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:17,fontWeight:450}}>{startTime.toLocaleTimeString('pt-BR')}</Text>
        <DateTimePickerModal
          isVisible={isStartTimePickerVisible}
          mode="time"
          date={startTime}
          is24Hour
          locale="pt-BR"
          onConfirm={handleStartTimeConfirm}
          onCancel={hideStartTimePicker}
          onRequestClose={hideStartTimePicker}
          onHide={hideStartTimePicker}
        />
      </View>
      

      {/*BOTÃO PARA MOSTRAR O SELETOR DE HORÁRIO FINAL*/}
      <View style={{gap:10,width:'100%',flexDirection:'row',alignContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:500}}>Selecione a hora final :</Text>
        <TouchableOpacity style={styleExterno.buttonsellecttime} onPress={showEndTimePicker}>
          <AntDesign name="clockcircleo" size={24} color="black" />  
        </TouchableOpacity>  
        <Text style={{fontSize:17,fontWeight:450}}>{endTime.toLocaleTimeString('pt-BR')}</Text>
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            date={endTime}
            is24Hour
            locale="pt-BR"
            onConfirm={handleEndTimeConfirm}
            onCancel={hideEndTimePicker}
            onRequestClose={hideEndTimePicker}
            onHide={hideEndTimePicker}
          />
        
      </View>
      
      <TextInput
        style={{ marginBottom: 10, height: 100 }}
        placeholder="Texto longo"
        multiline
        value={text}
        onChangeText={setText}
      />
      {/*BOTÃO PARA ENVIAR REGISTRO*/}
      <Button title="Registrar" onPress={handleSubmit} />
      <Button title = "Consultar" onPress={searchAccess}/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:2,
    borderColor:'red'
  },
  text:{
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    padding:10,
    borderWidth:1,
    borderColor:'black',
    width:100,
    height:35

  },
});