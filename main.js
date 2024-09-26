import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";


const app = express()
const port =6969;


//connectDb
connectDB();


app.get('/',(req,res)=>{
    res.json({msg:"hello"});
})

//crud functionality
//client -> middleware ->server

app.use('/movies', movieRoutes);

app.listen(port, ()=>{
    console.log(`the server is running at http://localhost:${port}`);
});