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

// const { connection } = await mongoose.connect(process.env.MONGO_URI);
// console.log(`MongoDB connected with ${connection.host}`);

//  _mongodb._tcp.cluster0.280fx.mongodb.net