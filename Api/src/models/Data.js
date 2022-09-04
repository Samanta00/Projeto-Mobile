import mongoose from "mongoose";



const dadosScrema=new mongoose.Schema(

  {  
    id: {type:String},
    senha:{type:String, required:true},
    Email:{type:String, required:true}
  }

)


const registro=mongoose.model('registro',dadosScrema)
//aqui estou criando um modelo do banco de dados moongose chamado cadastro, ou seja msm que ja exista um banco de dados la no mmongose
//ele vai chamar a criação msm assim
//se não tivesse nenhum ele criaria sozinho um com esse nome
//la ele vai guardar todos os valores que serão passados em dados


export default registro;

