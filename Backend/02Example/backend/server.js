import express from "express";

const app = express();


app.get("/",(req,res) =>{
    res.send("Hi ra mowaa!")
})

app.get("/api/randomfact",(req,res) =>{
    res.send("Roses are red...")
})

const port =  3000;
app.listen(port, () =>{
    console.log(`Server listening in port ${port}`);
})