import express, { Express } from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import router from "./routes/routes";
import mongoose from "mongoose";

const app:Express=express();
const server=http.createServer(app)
dotenv.config();
//Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT",3000)
app.set("BASE_URL","localhost")

const uri = "mongodb+srv://prasadspatil3:prasadspatil3@cluster0.5h2hlyc.mongodb.net/?retryWrites=true&w=majority";
//Define the Routes
app.use("/api/v1",router)

//Mongo Connections
const mongoURI =uri
if(!mongoURI){
    console.log("MongoDB URL is not defined")
    process.exit(1);
}
mongoose.connect(mongoURI,{}).then(()=>{
    console.log("MongoDB is connected");
})
.catch((error)=>{
   console.log(error)
});


//Start server
try{
 const port:Number=app.get("PORT")
 const baseUrl:String=app.get("BASE_URL")
 server.listen(port,():void=>{
    console.log("Server is listening")
 })
}catch(error){
    console.log(error)
}

export default server;



