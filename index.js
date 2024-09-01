import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import userRoutes from "./routes/userRoutes.js";
import { ipLogger } from "./middleware/ipLogger.js";
import { dateLogger } from "./middleware/dateLogger.js";
import cors from "cors"
const app = express();


app.use(express.json());
app.use(cors({ origin: "*",  }));
app.use(ipLogger);
app.use(dateLogger);

//  routes
app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("home page")
});
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


