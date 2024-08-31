import express from "express";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(express.json());

//  routes
app.use('/api', userRoutes);

// connection 
const PORT =  3000
const username = process.env.MONGO_USERNAME;
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const dbName = "registration"
const uri =  `mongodb+srv://${username}:${password}@cluster0.3j0ywmp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri).then(()=>{
    console.log("connect to mongodb")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


