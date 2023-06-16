import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,Feather,Ionicons,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

import search from './Pages/Search';
import pgs from './Pages/pgs';
import Home from './Pages/Home';
import icamento from './Pages/icamento';
import energiasperigosas from './Pages/energiasperigosas';
import espacoconfinado from './Pages/espacoconfinado';
import especialar from './Pages/especialar';
import quimicosperigosos from './Pages/quimicosperigosos';
import segurancadoprocesso from './Pages/segurancadoprocesso';
import trabalhoaltura from './Pages/trabalhoaltura';
import equipamentosmoveis from './Pages/equipamentosmoveis';
import aprovadoresEspecial from './Pages/aprovadoresEspecial';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import solicitantesEspecial from './Pages/solicitantesEspecial';
import { AntDesign } from '@expo/vector-icons';

import aprovadoresAltura from './Pages/aprovadoresAltura';
import aprovadoresConfinado from './Pages/aprovadoresConfinado';
import aprovadoresIcamento from './Pages/aprovadoresIcamento';
import aprovadoresMoveis from './Pages/aprovadoresMoveis';
import aprovadoresPerigosas from './Pages/aprovadoresPerigosas';
import aprovadoresQuimicos from './Pages/aprovadoresQuimicos';
import aprovadoresSegProc from './Pages/aprovadoresSegProc';


import solicitantesPerigosas from './Pages/solicitantesPerigosas';
import solicitantesQuimicos from './Pages/solicitantesQuimicos';
import solicitantesSegProc from './Pages/solicitantesSegProc';
import solicitantes_Altura from './Pages/solicitantesAltura';
import solicitantes_Confinado from './Pages/solicitantesConfinado';
import solicitantes_Moveis from './Pages/solcitantesMoveis';
import solicitantes_Icamento from './Pages/solicitantesIcamento';






const HomeStack = createStackNavigator();

function HomeTabStack({navigation}){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Início" component={Home} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="icamento" component={icamento} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="energiasperigosas" component={energiasperigosas} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="espacoconfinado" component={espacoconfinado} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="especialar" component={especialar} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="quimicosperigosos" component={quimicosperigosos} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="segurancadoprocesso" component={segurancadoprocesso} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="trabalhoaltura" component={trabalhoaltura} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="equipamentosmoveis" component={equipamentosmoveis} options={{headerTitle:'',headerTransparent:'true'}} />
            
            <HomeStack.Screen name="aprovadoresEspecial" component={aprovadoresEspecial} options={{headerTitle:'',headerTransparent:'true'}} />
            <HomeStack.Screen name="aprovadoresPerigosas" component={aprovadoresPerigosas} />
            <HomeStack.Screen name="aprovadoresQuimicos" component={aprovadoresQuimicos} />
            <HomeStack.Screen name="aprovadoresSegProc" component={aprovadoresSegProc} />
            <HomeStack.Screen name="aprovadoresMoveis" component={aprovadoresMoveis} />
            <HomeStack.Screen name="aprovadoresConfinado" component={aprovadoresConfinado} />
            <HomeStack.Screen name="aprovadoresAltura" component={aprovadoresAltura} />
            <HomeStack.Screen name="aprovadoresIcamento" component={aprovadoresIcamento} />

            <HomeStack.Screen name="solicitantesPerigosas" component={solicitantesPerigosas} />
            <HomeStack.Screen name="solicitantesQuimicos" component={solicitantesQuimicos} />
            <HomeStack.Screen name="solicitantesSegProc" component={solicitantesSegProc} />
            <HomeStack.Screen name="solicitantes_Moveis" component={solicitantes_Moveis} />
            <HomeStack.Screen name="solicitantes_Confinado" component={solicitantes_Confinado} />
            <HomeStack.Screen name="Solicitantes HPE Especial" component={solicitantesEspecial} />
            <HomeStack.Screen name="solicitantes_Altura" component={solicitantes_Altura} />
            <HomeStack.Screen name="solicitantes_Icamento" component={solicitantes_Icamento} />
            
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
                headerShown:false,
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color}/>
                    }

                    return <Ionicons name="search-outline" size={size} color={color}/>
                }   
            }}
            />

            <Tab.Screen 
            name="PG's" 
            component={pgs} 
            options={{
                headerShown:false,
                tabBarIcon:({size,color,focused})=> {
                    if(focused){
                        return <MaterialCommunityIcons name="shield-check" size={size} color={color}/>
                    }

                    return <MaterialCommunityIcons name="shield-outline" size={size} color={color}/>
                }
            }}
            />
            
            

        </Tab.Navigator>

        
    );
}

