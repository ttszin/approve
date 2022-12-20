import { StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor:'#4287f5',
    alignItems:'center',
    width:'100%',
    height:'15%',
    justifyContent:'center',

  },
  logo:{
    width:250,
    height:100,
  },
  icones:{
    height:80,
    width:80,
  },
  ordemdeicones:{
    marginTop:'10%',
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    height:'100%',
    width:'100%',

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


  });