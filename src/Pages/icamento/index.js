// src/Page1.js

import React, {useEffect} from 'react';
import { View, Button, Text,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import styleExterno from '../../../styles.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


export default function icamento({ navigation }) {
  var nome = 'IÇAMENTO';
  return(
    <ScrollView style={styleExterno.container2}> 
      <View style={{alignItems:'center'}}>
        <View style={styleExterno.boxsegundatela}>   
          <Image style={styleExterno.iconesmeio} source={{uri:('https://felkatransportes.com.br/wp-content/uploads/2021/11/4-removebg-preview.png')}}/>
          <Text style ={{fontFamily:'monospace', fontSize:20,textAlign:'center',color:'#6393f2'}}>Içamento de Cargas</Text>
        </View>
        
        <Text 
          style ={{
            fontFamily:'monospace', 
            fontSize:20,
            color:'#118bf0',
            marginTop:'10%', 
            marginLeft:'2%',
            marginRight:'2%',
            textAlign:'center',
          }}>O QUE VOCÊ PROCURA PARA A PTP DO TIPO ({nome}) ? </Text> 
        <Text
          style ={{
            fontFamily:'monospace', 
            fontSize:17,
            color:'#118bf0',
            marginTop:'1%', 
            marginLeft:'2%',
            marginRight:'2%',
            fontWeight: "bold",
            textAlign:'center',
          }}>
        Selecione Abaixo :</Text>
      </View>



      
      <View style={{flexDirection:'column',marginTop:'5%'}}>
        
        <View style={{marginLeft:'10%',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
          <Image 
          source={require('../../../icones/solicitante.png')}
          style={{marginLeft:'5%',width:50,height:50,marginRight:'1%'}}
          />
          {/* BOTÃO 1*/}
          <TouchableOpacity 
            onPress={() => navigation.navigate('solicitantes_Icamento')}
            style={{ 
              textAlign:'center',
              marginRight:'15%',
              borderRadius:50,
              backgroundColor:'#3585fc',
            }}
          >
              <Text
                style ={{
                  fontFamily:'monospace', 
                  fontSize:25,
                  textAlign:'center',
                  color:'#fff',
                  margin:'5%',
                  justifyContent:'center',
                }}
              >SOLICITANTE</Text>

          </TouchableOpacity>
        </View>

        <View style={{marginLeft:'10%',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',marginTop:'5%'}}>
          <Image 
            source={require('../../../icones/aprovador.png')}
            style={{marginLeft:'5%',width:50,height:50,marginRight:'1%'}}
          />
          {/* BOTÃO 2*/}
          <TouchableOpacity 
            onPress={() => navigation.navigate('aprovadoresIcamento')}
            style={{ 
              textAlign:'center',
              borderRadius:50,
              marginRight:'15%',
              backgroundColor:'#3585fc',
            }}
          >
            <Text
              style ={{
                fontFamily:'monospace', 
                fontSize:25,
                textAlign:'center',
                color:'#fff',
                margin:'5%',
                justifyContent:'center',
                marginRight:'9%',
                marginLeft:'10%',
              }}
            >APROVADOR</Text>
          </TouchableOpacity>  
        </View>
        
        <View style={{marginLeft:'11%',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',marginTop:'5%'}}>
          <View style={{marginLeft:'5%',width:50,height:50,marginRight:'1%'}}>
            {/*<AntDesign name="pdffile1" size={43} color="#3585fc" />*/}
          </View>
          {/* BOTÃO 2*/}
          <TouchableOpacity 
            onPress={() => navigation.navigate('aprovadores')}
            style={{ 
              textAlign:'center',
              borderRadius:50,
              marginRight:'15%',
              backgroundColor:'#3585fc',
            }}
          >
            {/*
            <Text
              style ={{
                fontFamily:'monospace', 
                fontSize:25,
                textAlign:'center',
                color:'#fff',
                margin:'4.5%',
                justifyContent:'center',
                marginRight:'26%',
                marginLeft:'26%',
              }}
            >PG</Text>
            */}
          </TouchableOpacity>  
        </View>




      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  text:{
    fontSize:25,
    fontWeight:'bold'
  },
  imagestyle:{
    position:'absolute',
    resizeMode:'stretch',
    width:'100%',
    height:'100%',

  }
});