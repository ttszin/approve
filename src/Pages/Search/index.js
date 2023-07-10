// src/Page1.js

import React, { useEffect, useState } from 'react';
import { View, Button, Text,StyleSheet,TextInput,Alert  } from 'react-native';
import {db} from '../../../firebase.js';
import styleExterno from '../../../styles.js'
//import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons,  AntDesign} from '@expo/vector-icons';
//import { defined } from 'react-native-reanimated';
import { LogBox } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import 'firebase/compat/firestore';

export default function search({route,navigation}) {

  const [matricula,setMatricula] = useState('');

  LogBox.ignoreAllLogs();
  /*const [apontamentos, setApontamentos] = useState(0);

  useEffect(()=>{
    const unsub = db.collection('apontamentos')onSnapshot(function(snapshot){
      setApontamentos(snapshot.docs.map(val=>{
        return{
          id: val.id,
          numero:val.numero,
          matricula: val.matricula,
          texto: val.texto,
          centrotrabalho: val.cetrotrabalho
        }
      }))
    })
  },[])



  console.disableYellowBox = true; 
  const [messages,setMessages] = useState([]); 
  const [currentMessage, setCurrentMessage] = useState('');
  function sendInformations()

  
  ########################## FUNÇÃO PARA ENVIAR O APONTAMETO ##########################

  function sendApontamento()
  {
    let novoapontamento = {
      id: route.params.id,
      numero:route.params.numero,
      matricula: route.params.matricula,
      texto: route.params.texto,
      centrotrabalho: route.params.cetrotrabalho
    }
    db.collection('apontamentos').add(novoapontamento)({
      id: route.params.id,
      numero:route.params.numero,
      matricula: route.params.matricula,
      texto: route.params.texto,
      centrotrabalho: route.params.cetrotrabalho
    });

    console.log('Ordem enviada com sucesso');
  }
  

  const pickerRef = useRef();
  const [selectedWorkCenter, setSelectedWorkCenter] = useState();
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  <Picker
          ref={pickerRef}
          selectedValue={selectedWorkCenter}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedWorkCenter(itemValue)
          }>
          <Picker.Item label="MECABNG" value="MECABNG" />
          <Picker.Item label="ELETBNG" value="ELETBNG" />
          <Picker.Item label="INSTBNG" value="INSTBNG" />
          <Picker.Item label="LUBRBNG" value="LUBRBNG" />
          <Picker.Item label="MECATERC" value="MECATERC" />
  </Picker>

  x
  
  

  function sendApontamento({route,navigation})
  { 
    const [numordem,setNumOrdem] = useState("");

    let novoapontamento = {
      id: useState(''),
      ordem: useState(''),
      matricula: useState(''),
      texto: useState(''),
      centrotrabalho:useState('')
    }
    db.collection('apontamentos').add(novoapontamento)({
      
    });

    setCurrentOrdem('');
    


    console.log('Ordem enviada com sucesso');
  }
  */

  const [orderNumber, setOrderNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [text, setText] = useState('');
  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);

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

  const handleSubmit = async () => {
    try {
      await db.firestore().collection('apontamentos').add({
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Número de ordem"
        value={orderNumber}
        onChangeText={setOrderNumber}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Número de matrícula"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />
      <Button title="Insira a hora inicial" onPress={showStartTimePicker}/>
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

      <Button title="Insira a hora final" onPress={showEndTimePicker}/>
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
      <Button title="Registrar" onPress={handleSubmit} />
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