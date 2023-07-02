// src/Page1.js

import React, { useEffect, useState } from 'react';
import { View, Button, Text,StyleSheet,TextInput } from 'react-native';
import {db} from '../../../firebase.js';
import styleExterno from '../../../styles.js'
import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons,  AntDesign} from '@expo/vector-icons';
//import { defined } from 'react-native-reanimated';

export default function search({route,navigation}) {

  const [matricula,setMatricula] = useState('');


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

  */
  
  

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

  return(
    <View style={styles.container}>
      
      <View style={{flexDirection:'row',width:'100%',height:40,borderWidth:2,borderColor:'blue',margin:10,alignContent:'center',justifyContent:'center'}}>
        <Text
        style = {styleExterno.registrationText}>Insira o seu número de matrícula: </Text>
        <TextInput
          style = {styles.input}
          placeholderTextColor={'black'}
          value = {matricula}
          onChangeText={(val) => setCurrentOrdem(val)}
        />

      </View>
      
      <TouchableOpacity style = {{width:'10%',alignContent:'center',borderColor:'red',borderWidth:3}} onPress={()=>sendApontamento()}>
        <AntDesign name="dingding" size={24} color="rgb(52,119,235)" />
      </TouchableOpacity>
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