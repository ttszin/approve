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




export default function aprovadores() {
    const [aprovador,setarAprovadores] = useState([
      {
          nome: 'Emerson Resing',
          Telefone: '(53) 999959232',
          Ramal:'3674 ou 3670',
          imagem:{uri:'https://scontent.fpet2-1.fna.fbcdn.net/v/t39.30808-6/275230904_4891674140869839_7262289217897156405_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=33IHxOegCxUAX-ZRcX-&_nc_ht=scontent.fpet2-1.fna&oh=00_AfAe_wW8tp5OehNKAyfk75Dy1DR7eru-gAntP6gI92cDWw&oe=63901698'},
      },
      {
          nome: 'Fernando Bachi',
          Telefone: '(53) 999317208',
          Ramal:'3673',
          imagem:{uri:'https://scontent.fpet2-1.fna.fbcdn.net/v/t39.30808-6/281204430_5118700701545223_395572854658177605_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zhyxlleBbBoAX_2x50b&_nc_oc=AQmH8JCA6S7sSxyKEs5I3qUFNgtbjCiUkr-g1qvU7iHKWfhK3R6zo11iw3M4oO8gbHSB2qRa4CjKSipJZ5NfIPWY&_nc_ht=scontent.fpet2-1.fna&oh=00_AfDMQ897CWok2MyjUttZigTHlSCfYFMauv5_HN4qqELnIg&oe=638F2799'},
      },
      {
          nome: 'Guilherme Seger',
          Telefone: '(53) 999719166',
          Ramal:'3649',
          imagem:{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQEsrAH2NbuwqQ/profile-displayphoto-shrink_800_800/0/1625614523878?e=1675296000&v=beta&t=yvRYvWvDbkxwT6IxlNy65GCvmjNqoDaVWt7Rbv10mv4'},
      },
      {
          nome: 'Patrick Pereira',
          Telefone: '(53) 999719162',
          Ramal:'3659',
          imagem:{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQFT4y18bktONg/profile-displayphoto-shrink_800_800/0/1580955453879?e=1675296000&v=beta&t=lwew5Fy1c-eAM88UNhe9JZOiCP-ayxB5QjXFbUpx_XM'},
      },
      {
          nome: 'Thomaz Lobato',
          Telefone: '(53) 999540857',
          Ramal:'3654',
          imagem:{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQFpiIqXkF5uWA/profile-displayphoto-shrink_200_200/0/1660493001008?e=1675296000&v=beta&t=Md9_hZXrCJutdJpS7vaYww-7BWqPhioNS8vCbnrkyIM'},
      },

    ])
        
    return(
        <View style={{flex:1}}>
        <ScrollView style={styleExterno.container3}> 
            {
                aprovador.map((val)=>{
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