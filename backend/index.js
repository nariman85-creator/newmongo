import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';



import postRouter from './routes/posts.js';

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRouter);

 const port=process.env.PORT || 3000;

 mongoose.connect(process.env.SERVER_URL,{useNewUrlParser:true,useUnifiedTopology:true})
 .then(()=>app.listen(port,()=>{
     console.log('server running on the:');
 }))
 .catch((e)=>console.log(e.message));

mongoose.set('useFindAndModify',false);





