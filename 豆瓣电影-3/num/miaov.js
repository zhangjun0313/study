const express = require('express');
const app = express();
const fs = require('fs');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

let shopList = {};
fs.readFile('./publish/shuju.json', (error, data) => {
  shopList = {
    list: JSON.parse(data.toString())
  }
})

app.get('/api/list',(req,res)=>{
    res.send(shopList.list)
})


let shopL = {};
fs.readFile('./publish/future-shuju.json', (error, data) => {
  shopL = {
    list: JSON.parse(data.toString())
  }
})


app.get('/api/hot-list',(req,res)=>{
    res.send(shopL.list)
})



let hotList = {};
fs.readFile('./publish/future-shuju2.json', (error, data) => {
  hotList = {
    list: JSON.parse(data.toString())
  }
})


app.get('/api/hot-list-2',(req,res)=>{
    res.send(hotList.list)
})



app.listen(3100,  () => {
  console.log('启动了');
});