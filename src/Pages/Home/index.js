//HOME

import React from 'react';
import { View, Button, Text,StyleSheet,Image, Animated,TouchableOpacity,ScrollView, ViewComponent } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import styleExterno from 'E:/DANKI/approve/styles.js';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



export default function Home({navigation}) {
    const window = useWindowDimensions();
    return(
        <ScrollView style={styleExterno.container}>
            <StatusBar hidden/>
            <View style={styleExterno.header}>
                <Image 
                    style={styleExterno.logo}
                    source={require('E:/DANKI/approve/icones/logo.png')}
                />
            </View>


            <View>
                <Text 
                style={{
                    paddingTop:'2%',
                    fontSize:20,
                    fontFamily:'monospace',
                    textAlign:'center',
                }}
                >
                    SELECIONE A TAREFA A SER REALIZADA: 
                </Text>

                
                <View style={styleExterno.ordemdeicones}>
                
                    <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('icamento')}>
                        <Image
                        style={styleExterno.icones}
                        source={{uri:'https://felkatransportes.com.br/wp-content/uploads/2021/11/4-removebg-preview.png'}}
                        
                        />
                        <Text
                        style = {{
                            fontSize:12,
                            fontFamily:'monospace',
                            textAlign:'center',
                        }}
                        >
                        
                        Içamento
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('energiasperigosas')}>
                            <Image 
                                style={styleExterno.icones}
                                source={require('E:/DANKI/approve/icones/energiasperigosas.png')}
                            />
                            <Text
                                style = {{
                                    fontSize:12,
                                    fontFamily:'monospace',
                                    textAlign:'center',
    
                                }}
                            >
                                
                                Energias Perigosas
                            </Text>
                        </TouchableOpacity>
                    </View>
                        
                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('equipamentosmoveis')}>
                        <Image 
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/equipamentosMoveis.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Equipamentos Móveis
                        </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('espacoconfinado')}>
                        <Image 
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/EspacoConfinado.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Espaço Confinado
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('trabalhoaltura')}>
                        <Image
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/icamento.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Trabalho em Altura
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('quimicosperigosos')}>
                        <Image
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/quimicosPerigosos.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Químicos Perigosos
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('segurancadoprocesso')}>
                        <Image
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/segurancaDoProcesso.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Segurança Do Processo
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styleExterno.box} onPress={() => navigation.navigate('especialar')}>
                        <Image
                            style={styleExterno.icones}
                            source={require('E:/DANKI/approve/icones/especialar.png')}
                        />
                        <Text
                            style = {{
                                fontSize:12,
                                fontFamily:'monospace',
                                textAlign:'center',
                            }}
                        >
                            
                            Especial + AR
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </ScrollView>
  );
             
}

