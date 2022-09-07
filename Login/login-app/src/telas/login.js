import React,{useState}  from "react";

import { StyleSheet,  Text,  TextInput,  View,  KeyboardAvoidingView,  TouchableOpacity, Animated, TurboModuleRegistry, Button,} from "react-native";







function Busca(){
   
}


function armazenar(){
    const [email, setEmail]=useState(null)
    const [senha, setPassword]=useState(null)
}


export default function Login(){


    return (
        

       <KeyboardAvoidingView style={style.background}>

          
              <TextInput 
               style={style.input}
               placeholder="email"
               autoCorrect={false}
               onChangeText={email => setEmail(email)}
              />

            <TextInput 
               style={style.input}
               placeholder="senha"
               autoCorrect={false}
               onChangeText={Password => setPassword(Password)}
              />
       

            <View style={style.center}>

        <TouchableOpacity style={style.button} onPress={Busca}>
          <Text style={style.texto} >Acessar</Text>
        </TouchableOpacity>



            </View>
        <Text style={style.recuperar}>Esqueci Minha Senha</Text>     

       </KeyboardAvoidingView>
    )
}


const style=StyleSheet.create({

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        width: "100%",
        backgroundColor:'#14182b',
 

    },
    center:{
      
    justifyContent: "center",
    alignItems: "center",


    },

    input:{
        backgroundColor: "#fff",
        width: "70%",
        marginBottom: 15,
        color: "#222",
        fontSize: 17,
        borderRadius: 7,
        padding: 12,

    },
    recuperar:{
    color:"#ffff",
    marginTop:'3%',
    },
    button:{
        backgroundColor:"#14182b",
        width: "40%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        borderColor:'#ffff',
        borderWidth:1,
        color:"white",
        paddingBottom:0,
        paddingTop:0,
        padding:'5%',


    },
    texto:{
        color:"green"
    }

})

module.export=Login();