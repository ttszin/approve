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
import DatePicker from 'react-native-datepicker';

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
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    db
      .firestore()
      .collection('apontamentos')
      .add({
        orderNumber,
        registrationNumber,
        startTime: startTime ? startTime.toString() : null,
        endTime: endTime ? endTime.toString() : null,
        text,
      })
      .then(() => {
        Alert.alert('Sucesso', 'As informações foram registradas no Firebase.');
        // Limpar campos após o registro
        setOrderNumber('');
        setRegistrationNumber('');
        setStartTime(null);
        setEndTime(null);
        setText('');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Ocorreu um erro ao registrar as informações: ' + error.message);
      });
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
      <TouchableOpacity
        style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0' }}
        onPress={() => this.startTimePicker.onPressDate()}
      >
        <Text>{startTime ? startTime.toLocaleTimeString() : 'Selecionar hora inicial'}</Text>
      </TouchableOpacity>
      <DatePicker
        ref={(ref) => (this.startTimePicker = ref)}
        style={{ width: 200, marginBottom: 10 }}
        date={startTime}
        mode="time"
        format="HH:mm"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(time) => setStartTime(time)}
        customStyles={{
          dateInput: { borderWidth: 0 },
        }}
      />
      <TouchableOpacity
        style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0' }}
        onPress={() => this.endTimePicker.onPressDate()}
      >
        <Text>{endTime ? endTime.toLocaleTimeString() : 'Selecionar hora final'}</Text>
      </TouchableOpacity>
      <DatePicker
        ref={(ref) => (this.endTimePicker = ref)}
        style={{ width: 200, marginBottom: 10 }}
        date={endTime}
        mode="time"
        format="HH:mm"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(time) => setEndTime(time)}
        customStyles={{
          dateInput: { borderWidth: 0 },
        }}
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