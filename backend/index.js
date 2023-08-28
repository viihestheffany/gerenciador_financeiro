const express = require('express');

const app = express();

app.listen(5587,()=> console.log("gatinha"));

app.get('/',(req,res)=>{
  res.send("minhal")
})
app.get('/cachorro',(req,res)=>{
  res.send("auau")
})
app.get('/Fim',(req,res)=>{
  res.send("")
})
const dados = ["Viih"];
app.get('/j',(req,res)=>{res.json({dados})})