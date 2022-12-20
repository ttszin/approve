import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,Feather,Ionicons,MaterialIcons} from '@expo/vector-icons';

import search from './Pages/Search';
import notificacoes from './Pages/notificacoes';
import Home from './Pages/Home';
import icamento from './Pages/icamento';
import energiasperigosas from './Pages/energiasperigosas';
import espacoconfinado from './Pages/espacoconfinado';
import especialar from './Pages/especialar';
import quimicosperigosos from './Pages/quimicosperigosos';
import segurancadoprocesso from './Pages/segurancadoprocesso';
import trabalhoaltura from './Pages/trabalhoaltura';
import equipamentosmoveis from './Pages/equipamentosmoveis';
import solicitantes from './Pages/solicitantes';
import aprovadores from './Pages/aprovadores';
import aprovadoresEspecial from './Pages/aprovadoresEspecial';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import solicitantesEspecial from './Pages/solicitantesEspecial';





const HomeStack = createStackNavigator();

function HomeTabStack({navigation}){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Início" component={Home} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="aprovadoresEspecial" component={aprovadoresEspecial} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="icamento" component={icamento} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="energiasperigosas" component={energiasperigosas} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="espacoconfinado" component={espacoconfinado} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="especialar" component={especialar} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="quimicosperigosos" component={quimicosperigosos} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="segurancadoprocesso" component={segurancadoprocesso} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="trabalhoaltura" component={trabalhoaltura} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="equipamentosmoveis" component={equipamentosmoveis} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="solicitantes" component={solicitantes} />
            <HomeStack.Screen name="Solicitantes HPE Especial" component={solicitantesEspecial} />
            <HomeStack.Screen name="aprovadores" component={aprovadores} />
        </HomeStack.Navigator>
    );
}





//==========================================================================================================================================
//==========================================================================================================================================
//==========================================================================================================================================


const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'#fff',
                tabBarInactiveTintColor:'#fff',
                tabBarShowLabel:'false',
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#6393f2',
                    borderTopColor:'transparent',
                    borderTopWidth:0,

                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius:4,
                    height:60,
                },
                
            }}
        >
            
            <Tab.Screen 
                name="Início" 
                component={HomeTabStack} 
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color,focused})=> {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                        }

                        return <Ionicons name="home-outline" size={size} color={color}/>
                        
                }
                }}
            />

            <Tab.Screen 
            name="search" 
            component={search} 
            options={{
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color}/>
                    }

                    return <Ionicons name="search-outline" size={size} color={color}/>
                }   
            }}
            />

            <Tab.Screen 
            name="Notificações" 
            component={notificacoes} 
            options={{
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <MaterialIcons name="notifications-active" size={size} color={color}/>
                    }

                    return <MaterialIcons name="notifications-none" size={size} color={color}/>
                }
            }}
            />
            
            

        </Tab.Navigator>

        
    );
}


