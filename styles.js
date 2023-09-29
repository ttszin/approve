import reactDom from 'react-dom';
import { StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    alignItems:'center',
    margin:5,
    height:'30%',
    justifyContent:'center',
  },
  logo:{
    width:100,
    height:40,
  },
  icones:{
    height:80,
    width:80,
  },
  ordemdeicones:{
    justifyContent:'center',
    marginTop:'3%',
    flexDirection:'row',
    flexWrap:'wrap',
    height:'100%',
    width:'100%',
    marginBottom:"10%"
  },

  box:{
    alignItems:'center',
    width:100,
    height:120,
    margin:5,
    borderColor:'#999',
    borderWidth:5,
  },


  //===============================================================================================================
  //===============================================================================================================
  //===============================================================================================================
  
  
  // ESTILOS TELAS SECUNDÁRIAS

  container2:{
    flex:1,
    backgroundColor:'#fff',
  },

  boxsegundatela:{
    alignItems:'center',
    width:'60%',
    height:200,
    borderColor:'#6393f2',
    borderWidth:5,
    backgroundColor:'transparent',
    borderRadius:20,
    marginTop:'10%',
  },

  iconesmeio:{
    height:140,
    width:140,

  },

  //===============================================================================================================
  //===============================================================================================================
  //===============================================================================================================


  //SOLICITAÇÕES E APROVAÇÕES


  tableText:{
    width:'50%',
    height:'70%',
    color:'black',
    textAlign:'center',
  },


  //#######################################################################

  tableTextIcamentoImagem:{
    width:'100%',
    height:'20%',
    color:'black',
  },

  
  tableTextIcamentoAprovaImagem:{
    width:'100%',
    height:'35%',
    color:'black',
    paddingBottom:10
  },

  tableIcamentoImagem:{
    margin:10,
    padding:10,
    borderColor:'#5BFC7B',
    borderWidth:3,
    borderRadius:10
  },


  //#######################################################################



  tableTextIcamento:{
    width:'100%',
    height:'20%',
    color:'black',
  },

  
  tableTextIcamentoAprova:{
    width:'100%',
    height:'35%',
    color:'black',
    paddingBottom:10
  },

  tableIcamento:{
    flexDirection:'row',
    padding:10
  },

  //#######################################################################

  table:{
    flexDirection:'row',
    padding:35 ,
    borderBottomColor:'black',
    borderBottomWidth:3,
  },


  container3:{
    backgroundColor:'#fff',
    flex:1,
    borderColor:'black',


  },

  //===============================================================================================================
  //===============================================================================================================
  //===============================================================================================================

  //TELA DE LOGIN

  fundo:{
    flex:1,
    backgroundColor:'#0043ad',
    alignItems:'center',
    paddingTop:245,
    textAlign:'center',
    borderWidth:3,
    borderColor:'#0a0eff',
  },

  texto:{
    color:'#ffffff',
    fontSize:30
  },

  texto2:{
    color:'#ffffff',
    fontSize:16,
    paddingBottom:30

  },

  textoinput:{
    padding:10,
    borderWidth:1,
    borderColor:'white',

  },

  boxLogin: {
    bottom: 0,
    left: 0,
    backgroundColor: '#0d1dd4',
    borderTopColor: '#FFF',
    borderTopWidth: 1,
  },

  //===============================================================================================================
  //===============================================================================================================
  //===============================================================================================================

  //TELA PGS

  boxpg: {
    margin:5,
    flex:1,
    width:150,
    height:130,
    borderWidth:2,
    borderColor:'#6393f2',
    borderRadius:2,
    //backgroundColor:'#ffff',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    flexWrap:'nowrap'
  },

  textpg:{
    fontSize:11,
    marginBottom:5,
    textAlign:'center',
    
  },

  imagepg:{
    width:70,
    height:70,
    alignSelf:'center'
  },

  viewtextpgs:{
    width:140,
    height:25,
    borderWidth:2,
    borderRadius:30,
    borderColor:'#6393f2',
    justifyContent:'center',
    marginTop:5
  },

  //===============================================================================================================
  //===============================================================================================================
  //===============================================================================================================

  //TELA DE APONTAMENTO

  buttonsellecttime:{
    borderColor:'red',
    borderWidth:2,
    width:100,
    height:50
  },

  inputsstyle:{
    height:'100%',
    width:'45%',
    marginBottom: 10,
    borderWidth:1,
    borderColor:'#9e9e9e',
    textAlign:'center'
  }



  });