import express from "express";

const app = express()
const port =6969;

app.get('/',(req,res)=>{
    res.json({msg:"hello"});
})

app.listen(port, ()=>{
    console.log(`the server is running at http://localhost:${port}`);
});