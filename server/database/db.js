import mongoose from 'mongoose';



const DBConnection = async() =>{
    const DB_URL=`mongodb://abhradip:saha@ac-h4pi8ti-shard-00-00.omvunhe.mongodb.net:27017,ac-h4pi8ti-shard-00-01.omvunhe.mongodb.net:27017,ac-h4pi8ti-shard-00-02.omvunhe.mongodb.net:27017/?ssl=true&replicaSet=atlas-un9j66-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await  mongoose.connect(DB_URL,{ useNewUrlParser:true });
        console.log('Database connected successfully');
    }catch(error){
            console.error("Error while connecting database ",error.message);
        }
    
}

export default DBConnection;