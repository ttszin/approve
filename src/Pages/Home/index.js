//HOME

import React from 'react';
import { View, Button, Text,StyleSheet,Image, Animated,TouchableOpacity,ScrollView, ViewComponent,ImageBackground } from 'react-native';
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
                <ImageBackground source={require('E:/DANKI/approve/icones/planta.jpg')} style={{flex:1,width:'100%',borderColor:'#6393f2',borderWidth:2,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Image 
                        style={styleExterno.logo}
                        source={require('E:/DANKI/approve/icones/logo.png')}
                    />
                </ImageBackground>
            </View>

            <View style ={{width:'100%',height:'68.5%',marginBottom:100,}}>  
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