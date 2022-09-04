import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://Ellen_Samanta:ElS895623@cluster0.bnkdrks.mongodb.net/data-client')
//o final da url foi apagado para tirar as tentativas de conexão


const db=mongoose.connection;


export default db;