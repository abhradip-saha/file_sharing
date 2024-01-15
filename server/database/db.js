import mongoose from 'mongoose';



const DBConnection = () =>{
    const DB_URL=`mongodb://abhradip:saha@ac-h4pi8ti-shard-00-00.omvunhe.mongodb.net:27017,ac-h4pi8ti-shard-00-01.omvunhe.mongodb.net:27017,ac-h4pi8ti-shard-00-02.omvunhe.mongodb.net:27017/?ssl=true&replicaSet=atlas-un9j66-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(DB_URL)
   .then(()=>{
      console.log("DB connection successful.");
   })
   .catch((err)=>{
      console.log(`DB connection error:${err}`);
   });
}

export default DBConnection;
