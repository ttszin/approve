// src/Page1.js

import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import { Constants } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';


export default function pgs() {
  return(
	<ScrollView>
		<View style={{flex:1,paddingTop:20,alignItems:'center'}}>
				<Text style={{fontSize:13}} /*LOCAL DO ARQUIVO1*/ >PG-00-BS-8002 </Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO1*/ >Trabalho Em Altura </Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao1" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1Qyk8SpCYeI0JJMdgJ2Blm5fZ0iaweeom/view?usp=sharing')}
				>

				</Button>
				
				
				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO2*/>PG-00-BS-8004</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO2*/>Espaco Confinado_rev 2</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 

				title='pdf' 
				class="Botao2" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1jrEjexi-9lFzpBVzpuAaVM_5vE1UWc-5/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO3*/>PG-00-BS-8005</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO3*/>Trabalho com Içamento de Carga - Rev 03</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao3" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/10g988U3XjUjRlLTX7RdWlMtDduqike1M/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO4*/>PG-00-BS-8006</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO4*/>Trabalho a Quente_rev 2</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao4" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1jrEjexi-9lFzpBVzpuAaVM_5vE1UWc-5/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO5*/>PG-00-BS-8008</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO5*/>Controle de Energias Perigosas_rev 2</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao5" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1rrJUa41NpgbhkHAVqolWN_Zg-LDlXsaf/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO6*/>PG-00-BS-8009</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO6*/>Abertura de Linha</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao6" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1-TeAkrOvBqQ39MLHAVMNcywhlhWkL_fv/view?usp=sharing')}
				>

				</Button>
				
				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO7*/>PG-00-BS-8010</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO7*/>Permissão de Serviço_rev3</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao7" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/16mj3bYmcCfP-xgr3VhATly5_eb0HLqUg/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO8*/>PG-00-BS-8011</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO8*/>Trabalho em Eletricidade</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao8" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1Hw3OQQ13Ec4pIEFDuQ5UOO1XDgnPbz4L/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO9*/>PG-00-BS-8012</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO9*/>Equipamentos Móveis - Rev 03 (PT)</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao9" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1AfSiX4wnXc7c3MG4HoH0U7BeP2wrDUmO/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO10*/>PG-00-BS-8013</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO10*/>Atividade de Campo (animais peçonhentos)_rev 2</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao10" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1V5vxdSNKKBOkinBrYGVzOmuDzhmWotIc/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO11*/>PG-00-BS-8014</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO11*/>Mudança de Frente - Final_rev3</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao11" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/18wHhbKbx-6rveM4COhvVGDFQ6L-ZntFW/view?usp=sharing')}
				>

				</Button>

				<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO12*/>PG-00-BS-8019</Text>
				<Text style={{fontSize:13,marginBottom:10}} /*LOCAL DO ARQUIVO12*/>Segurança em Escadas Móveis Rev2021</Text>
				<Image style={{backgroundColor:'white',width:88,height:88,marginBottom:15}} 
					source={{
						uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
					}}
			
				/> 
				<Button 
				title='pdf' 
				class="Botao12" 
				onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/10fQ7qGc6WaHd_qk4xVlJgZ-xdcmJWnkO/view?usp=sharing')}
				>

				</Button>
				<View style={{paddingBottom:100}}></View>
				
			</View>
		</ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
});