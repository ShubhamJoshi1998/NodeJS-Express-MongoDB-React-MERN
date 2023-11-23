const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const express = require('express');
const server = express();

server.get('/', (req,res) => {
    res.json({type:'GET'})
})
server.post('/', (req,res) => {
    res.json({type:'POST'})
})
server.put('/', (req,res) => {
    res.json({type:'PUT'})
})
server.delete('/', (req,res) => {
    res.json({type:'DELETE'})
})
server.patch('/', (req,res) => {
    res.json({type:'PATCH'})
})





server.get('/', (req,res) => {
    //res.send('<h1>Hello</h1>')
    //res.sendFile('D:\Shubham\Node\node-app\index.html')
    // res.json(products);
    res.sendStatus(404);
})


server.listen(8080, () => {
    console.log("express server started");
})

