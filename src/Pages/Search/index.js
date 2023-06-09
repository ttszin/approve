// src/Page1.js

import React, { useEffect, useState } from 'react';
import { View, Button, Text,StyleSheet,TextInput } from 'react-native';
import {db} from '../../../firebase.js';
import styleExterno from '../../../styles.js'


export default function search() {

  const [matricula,setMatricula] = useState('');


  /*const [apontamentos, setApontamentos] = useState(0);

  useEffect(()=>{
    const unsub = db.collection('apontamentos').onSnapshot(function(snapshot){
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
  {
    let ordem = {
      id: route.params.id,
      numero:route.params.numero,
      matricula: route.params.matricula,
      texto: route.params.texto,
      centrotrabalho: route.params.cetrotrabalho
    }
    db.collection()
  }*/
  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:'100%',height:200,borderWidth:2,borderColor:'blue',margin:10}}>
        <Text
        style = {styleExterno.registrationText}>Insira o seu número de matrícula: </Text>
        <TextInput
          style = {styles.input}
          placeholderTextColor={'black'}
          onChangeText={(val) => SetPassword(val)}
        />

      </View>
      
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