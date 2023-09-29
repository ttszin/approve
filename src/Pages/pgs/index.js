// src/Page1.js

import React from 'react';
import { StyleSheet, Text, View,Image,Button,ScrollView, TouchableOpacity } from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import { Constants } from 'expo';
import styleExterno from '../../../styles.js';
import style from 'react-native-datepicker/style.js';


export default function pgs() {
	return(
		<ScrollView>
			<View style={{flex:1,paddingTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
			
				<View>
					{/* BOX DE ÍCONES */}
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,textAlign:'center'}} /*LOCAL DO ARQUIVO1 >PG-00-BS-8002 </Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1Qyk8SpCYeI0JJMdgJ2Blm5fZ0iaweeom/view?usp=sharing')}>
							<Image style={styleExterno.imagepg} 
								source={
									require('../../../icones/icons_pg/pgaltura.png')
								}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO1*/ >Trabalho Em Altura </Text>
							</View>
						</TouchableOpacity>
						
					</View>
				</View>
				
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1jrEjexi-9lFzpBVzpuAaVM_5vE1UWc-5/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={
									require('../../../icones/EspacoConfinado.png')
								}
							/>
							<View style={styleExterno.viewtextpgs}>
								<Text  ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Espaco Confinado</Text>
							</View> 
						</TouchableOpacity>
					</View>
				</View>


				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/10g988U3XjUjRlLTX7RdWlMtDduqike1M/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={
									require('../../../icones/icamento.png')
								}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Içamento de Carga</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1jrEjexi-9lFzpBVzpuAaVM_5vE1UWc-5/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Trabalho a Quente</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1rrJUa41NpgbhkHAVqolWN_Zg-LDlXsaf/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={
									require('../../../icones/energiasperigosas.png')
								}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>CEP</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1-TeAkrOvBqQ39MLHAVMNcywhlhWkL_fv/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Abertura de Linha</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/16mj3bYmcCfP-xgr3VhATly5_eb0HLqUg/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Permissão de Serviço</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1Hw3OQQ13Ec4pIEFDuQ5UOO1XDgnPbz4L/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Trabalho em Eletricidade</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}						
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1AfSiX4wnXc7c3MG4HoH0U7BeP2wrDUmO/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={
									require('../../../icones/equipamentosMoveis.png')
								}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Equipamentos Móveis</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1V5vxdSNKKBOkinBrYGVzOmuDzhmWotIc/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Animais Peçonhentos</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/18wHhbKbx-6rveM4COhvVGDFQ6L-ZntFW/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Mudança de Frente</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={styleExterno.boxpg}>
						{/*<Text style={{fontSize:13,marginTop:50}} /*LOCAL DO ARQUIVO>PG-00-BS-8004</Text>*/}
						<TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/10fQ7qGc6WaHd_qk4xVlJgZ-xdcmJWnkO/view?usp=sharing')}>
							<Image style={styleExterno.imagepg}
								source={{
									uri:'https://play-lh.googleusercontent.com/9YV8kd_shPz89qUraU97RKOc7vt5XSw7PDxJqAQmmn2J9h8mwpL8mVtKMqD8puNa1oY=w96',
								}}
							/> 
							<View style={styleExterno.viewtextpgs}>
								<Text ellipsizeMode = "clip" numberOfLines={1} style={styleExterno.textpg} /*LOCAL DO ARQUIVO2*/>Escadas Móveis</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>				
			</View>
			<View style={{paddingBottom:100}}></View>
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