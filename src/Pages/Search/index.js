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

export default function search({route,navigation}) {

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
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      
      <View style={{padding:10,width:'100%',height:'6%',flexDirection:'row'}}>
        <Text>Insira o número da ordem : </Text>
        <TextInput
          style={styleExterno.inputsstyle}
          placeholder="Número da ordem"
          value={orderNumber}
          onChangeText={setOrderNumber}
        />
      </View>
      <View style={{padding:10,width:'100%',height:'6%',flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <Text>Insira o número de matrícula : </Text>
        <TextInput
          style={styleExterno.inputsstyle}
          placeholder="Número de matrícula"
          value={registrationNumber}
          onChangeText={setRegistrationNumber}
        />
      </View>
     
    

      {/*BOTÃO PARA MOSTRAR O SELETOR DE HORÁRIO INICIAL*/}
      <TouchableOpacity style={styleExterno.buttonsellecttime} onPress={showStartTimePicker}>
	  	<Text>Selecione a hora</Text>
	  </TouchableOpacity>
      <Text>{startTime.toLocaleTimeString('en-GB')}</Text>
      <DateTimePickerModal
        isVisible={isStartTimePickerVisible}
        mode="time"
        date={startTime}
        is24Hour
        locale="en_GB"
        onConfirm={handleStartTimeConfirm}
        onCancel={hideStartTimePicker}
        onRequestClose={hideStartTimePicker}
        onHide={hideStartTimePicker}
      />

      {/*BOTÃO PARA MOSTRAR O SELETOR DE HORÁRIO FINAL*/}
      <TouchableOpacity style={styleExterno.buttonsellecttime} onPress={showEndTimePicker}>
		<Text>Selecione a hora</Text>
      </TouchableOpacity>
      <Text>{endTime.toLocaleTimeString('en-GB')}</Text>
      <DateTimePickerModal
        isVisible={isEndTimePickerVisible}
        mode="time"
        date={endTime}
        is24Hour
        locale="en_GB"
        onConfirm={handleEndTimeConfirm}
        onCancel={hideEndTimePicker}
        onRequestClose={hideEndTimePicker}
        onHide={hideEndTimePicker}
      />
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