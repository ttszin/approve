import React from 'react';
import { View, Text,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native';
import styleExterno from 'E:/DANKI/approve/styles.js';
import {useState} from "react";
import { validatePathConfig } from '@react-navigation/native';



{/*
    const [solicitante,setarSolicitantes] = useState([
        {
            nome: 'Carlos Costa',
            Telefone: '-',
            Ramal:'3626',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Diecson Velasques',
            Telefone: '-',
            Ramal:'3641',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Emerson Resing',
            Telefone: '(53) 999959232',
            Ramal:'3626',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Fernando Bachi',
            Telefone: '(53) 999317208',
            Ramal:'3673',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Guilherme Seger',
            Telefone: '(53) 999719166',
            Ramal:'3649',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Patrick Pereira',
            Telefone: '(53) 999719162',
            Ramal:'3659',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
            nome: 'Thomaz Lobato',
            Telefone: '(53) 999540857',
            Ramal:'3654',
            imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
    ]);

    //##########################################Icamento#######################################################
    const [aprovaIcamento,setarAprovadoresI] = useState([
        {
          nome: 'Emerson Resing',
          Telefone: '(53) 999959232',
          Ramal:'3626',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Fernando Bachi',
          Telefone: '(53) 999317208',
          Ramal:'3673',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Guilherme Seger',
          Telefone: '(53) 999719166',
          Ramal:'3649',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) 999719162',
          Ramal:'3659',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Thomaz Lobato',
          Telefone: '(53) 999540857',
          Ramal:'3654',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
  
      ])
  
  
      const [solicitaIcamento,setarSolicitantesI] = useState([
        {
          nome: 'Carlos Costa',
          Telefone: '-',
          Ramal:'3626',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Diecson Velasques',
          Telefone: '-',
          Ramal:'3641',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Emerson Resing',
          Telefone: '(53) 999959232',
          Ramal:'3626',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Fernando Bachi',
          Telefone: '(53) 999317208',
          Ramal:'3673',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Guilherme Seger',
          Telefone: '(53) 999719166',
          Ramal:'3649',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) 999719162',
          Ramal:'3659',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Thomaz Lobato',
          Telefone: '(53) 999540857',
          Ramal:'3654',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
      ])
      //##########################################Icamento#######################################################
  
  
  
  
  
      //##########################################Energias Perigosas#######################################################
      const [aprovaEnergias,setarAprovadoresE] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      const [solicitaEnergias,setarSolicitantesE] = useState([
        {
          nome: 'Carlos Costa',
          Telefone: '-',
          Ramal:'3626',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Diecson Velasques',
          Telefone: '-',
          Ramal:'3641',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Emerson Resing',
          Telefone: '(53) 999959232',
          Ramal:'3626',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Fernando Bachi',
          Telefone: '(53) 999317208',
          Ramal:'3673',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Guilherme Seger',
          Telefone: '(53) 999719166',
          Ramal:'3649',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) 999719162',
          Ramal:'3659',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
        {
          nome: 'Thomaz Lobato',
          Telefone: '(53) 999540857',
          Ramal:'3654',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
      ])
      //##########################################Energias Perigosas#######################################################
  
  
  
      //##########################################Equipamentos Móveis#######################################################
      const [aprovaEquipamentos,setarAprovadoresEq] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        }
      ])
      const [solicitaEquipamentos,setarSolicitantesEq] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
      ])
      //##########################################Equipamentos Móveis#######################################################
  
  
  
      //##########################################Espaço Confinado#######################################################
      const [aprovaConfinado,setarAprovadoresC] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
        },
      ])
      const [solicitaConfinado,setarSolicitantesC] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      //##########################################Espaço Confinado#######################################################
  
  
      
      //##########################################Trabalho em Altura#######################################################
      const [aprovaAltura,setarAprovadoresA] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      const [solicitaAltura,setarSolicitantesA] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      //##########################################Trabalho em Altura#######################################################
  
  
  
  
      //##########################################Químicos Perigosos#######################################################
      const [aprovaQuimicos,setarAprovadoresQ] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      const [solicitaQuimicos,setarSolicitantesQ] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      //##########################################Químicos Perigosos#######################################################
  
  
  
      //##########################################Segurança Do Processo#######################################################
      const [aprovaSP,setarAprovadoresSP] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      const [solicitaSP,setarSolicitantesSP] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      //##########################################Segurança Do Processo#######################################################
  
  
  
      //##########################################Especial + AR#######################################################
      const [aprovaEspecial,setarAprovadoresEsp] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      const [solicitaEspecial,setarSolicitantesEsp] = useState([
        {
          nome: 'Patrick Pereira',
          Telefone: '(53) - 123456789',
          Ramal:'12',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
        }
      ])
      //##########################################Especial + AR#######################################################
    


    //##########################################Energias Perigosas#######################################################
    const [aprovaEnergias,setarAprovadoresE] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    const [solicitaEnergias,setarSolicitantesE] = useState([
    {
        nome: 'Carlos Costa',
        Telefone: '-',
        Ramal:'3626',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Diecson Velasques',
        Telefone: '-',
        Ramal:'3641',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Emerson Resing',
        Telefone: '(53) 999959232',
        Ramal:'3626',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Fernando Bachi',
        Telefone: '(53) 999317208',
        Ramal:'3673',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Guilherme Seger',
        Telefone: '(53) 999719166',
        Ramal:'3649',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) 999719162',
        Ramal:'3659',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    {
        nome: 'Thomaz Lobato',
        Telefone: '(53) 999540857',
        Ramal:'3654',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    ])
    //##########################################Energias Perigosas#######################################################



    //##########################################Equipamentos Móveis#######################################################
    const [aprovaEquipamentos,setarAprovadoresEq] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    }
    ])
    const [solicitaEquipamentos,setarSolicitantesEq] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    ])
    //##########################################Equipamentos Móveis#######################################################



    //##########################################Espaço Confinado#######################################################
    const [aprovaConfinado,setarAprovadoresC] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
    },
    ])
    const [solicitaConfinado,setarSolicitantesC] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    //##########################################Espaço Confinado#######################################################


    
    //##########################################Trabalho em Altura#######################################################
    const [aprovaAltura,setarAprovadoresA] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    const [solicitaAltura,setarSolicitantesA] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    //##########################################Trabalho em Altura#######################################################




    //##########################################Químicos Perigosos#######################################################
    const [aprovaQuimicos,setarAprovadoresQ] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    const [solicitaQuimicos,setarSolicitantesQ] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    //##########################################Químicos Perigosos#######################################################



    //##########################################Segurança Do Processo#######################################################
    const [aprovaSP,setarAprovadoresSP] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    const [solicitaSP,setarSolicitantesSP] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    //##########################################Segurança Do Processo#######################################################



    //##########################################Especial + AR#######################################################
    const [aprovaEspecial,setarAprovadoresEsp] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    const [solicitaEspecial,setarSolicitantesEsp] = useState([
    {
        nome: 'Patrick Pereira',
        Telefone: '(53) - 123456789',
        Ramal:'12',
        imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'}
    }
    ])
    //##########################################Especial + AR#######################################################
*/}




export default function aprovadoresEspecial() {
    const [aprovadorEspecial,setarAprovadores] = useState([
      {
          nome: 'Ricardo Assman',
          Telefone: '-',
          Ramal:'3611',
          imagem:{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQGxc5xMD3tGHQ/profile-displayphoto-shrink_800_800/0/1609989117884?e=1675296000&v=beta&t=hX30nwSQZPWwa5Qvo6Tma93uOahQrR_oJ-Omks7dbiU'},
      },
      {
          nome: 'José Eduardo',
          Telefone: '-',
          Ramal:'-',
          imagem:{uri:'https://media-exp1.licdn.com/dms/image/C5603AQGYSba59nfy2Q/profile-displayphoto-shrink_800_800/0/1517547631214?e=1675296000&v=beta&t=B0GuoBjrwVrCXs_XgT-BKgICFvf0tF1PAweRyCQzpKw'},
      },
      {
          nome: 'Diego Simões',
          Telefone: '-',
          Ramal:'3663',
          imagem:{uri:'https://pngimage.net/wp-content/uploads/2018/06/trabalhador-png-6.png'},
      },
      

    ])
        
    return(
        <View style={{flex:1}}>
        <ScrollView style={styleExterno.container3}> 
            {
                aprovadorEspecial.map((val)=>{
                    return(
                        <>   
                            <Image style={{width:200,height:300,flexDirection:'column',alignSelf:'center',marginTop:10}} source={val.imagem}></Image>	
                            <View style  ={styleExterno.table}>
                                <View onPress={()=>changeMusic(k)} style = {{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                                    <Text style= {styleExterno.tableText}>Nome: {val.nome}</Text>
                                    <Text style= {styleExterno.tableText}>Telefone: {val.Telefone}</Text>
                                    <Text style= {styleExterno.tableText}>Ramal: {val.Ramal}</Text>
                                </View>	                                                                                          
                            </View>                                                                                                                                        
                        </>
                    );
                })
            }
            <View style={{paddingBottom:200 }}></View>
        </ScrollView>
        </View>
    );
}