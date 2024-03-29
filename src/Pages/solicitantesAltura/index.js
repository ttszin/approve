import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import styleExterno from '../../../styles.js';
import { validatePathConfig } from '@react-navigation/native';
import {db} from '../../../firebase.js';


export default function solicitantes_Altura() {
        
    const [solicitantesAltura,setarSolicitantesAltura] = useState([]);

    useEffect(()=>{
		db.collection('Solicitantes_altura').onSnapshot(snapshot=>{
			setarSolicitantesAltura(snapshot.docs.map(function(doc){
			return {info:doc.data()}
			}));
		})
    },[])

    return(
        <View style={{flex:1}}>
        <ScrollView style={styleExterno.container3}> 
            {
                solicitantesAltura.map((val)=>{
                    if (val.info.Imagem != undefined & val.info.Imagem != ""){
                        return(
                            <>   
                                <View style  ={styleExterno.tableIcamentoImagem}>
                                    <Image style={{width:200,height:300,alignSelf:'center',marginTop:10,marginBottom:10}} source={{ uri: val.info.Imagem}}></Image>	
                                    <View style = {{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',TextAlign:'center',margin:10}}>
                                        <Text style= {styleExterno.tableTextIcamentoImagem}>Nome: {val.info.Nome}</Text>
                                        <Text style= {styleExterno.tableTextIcamentoImagem}>Ramal: {val.info.Ramal}</Text>
                                        <Text style= {styleExterno.tableTextIcamentoImagem}>Telefone: {val.info.Telefone}</Text>
                                        <Text style= {styleExterno.tableTextIcamentoImagem}>Setor: {val.info.Setor}</Text>
                                        <Text style= {styleExterno.tableTextIcamentoAprovaImagem}>Aprova: {val.info.Permitido}</Text>
                                    </View>	                                                                                          
                                </View>                                                                                                                                        
                            </>
                        );
                    }
                    else{
                        return(
                            <>   
                                <View style  ={styleExterno.tableIcamento}>
                                    <View style = {{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',TextAlign:'center',padding:10,borderColor:'#5BFC7B',borderWidth:2,borderRadius:10}}>
                                        <Text style= {styleExterno.tableTextIcamento}>Nome: {val.info.Nome}</Text>
                                        <Text style= {styleExterno.tableTextIcamento}>Ramal: {val.info.Ramal}</Text>
                                        <Text style= {styleExterno.tableTextIcamento}>Telefone: {val.info.Telefone}</Text>
                                        <Text style= {styleExterno.tableTextIcamento}>Setor: {val.info.Setor}</Text>
                                        <Text style= {styleExterno.tableTextIcamentoAprova}>Aprova: {val.info.Permitido}</Text>
                                    </View>	                                                                                          
                                </View>                                                                                                                                        
                            </>
                        );
                    }
                })
            }
            <View style={{paddingBottom:200 }}></View>
        </ScrollView>
        </View>
    );
}