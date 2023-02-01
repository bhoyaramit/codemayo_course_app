import mongoose  from "mongoose";



export const ConnDB = async ()=>{
   
mongoose.set('strictQuery', false);

const {connection} = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
});
    
    console.log(`Database Connect With ${connection.host}`);

}
