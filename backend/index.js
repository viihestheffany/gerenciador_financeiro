const express = require('express');

const app = express();
app.use(express.json())

app.listen(5587,()=> console.log("gatinha"));

// app.get('/',(req,res)=>{
//   res.send("minhal")
// })
// app.get('/cachorro',(req,res)=>{
//   res.send("auau")
// })
// app.get('/Fim',(req,res)=>{
//   res.send("")
// })
// const dados = ["Viih"];
// app.get('/j',(req,res)=>{res.json({dados})})
const mysql = require('mysql2/promise');
const conection = mysql.createPool({
  host: 'localhost',
  port:3306,
  database: 'testepessoa',
  user: 'root',
  password:''
})

const getAllPessoas = async ()=> {
  const [query] = await conection.execute('select * from pessoa')
  return query
}

app.get('/pessoa',async(req,res)=>{
  const resultado = await getAllPessoas()
  return res.status(200).json(resultado)
})