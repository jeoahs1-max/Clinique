const express = require('express');
const app = express(); app.use(express.json());
app.get('/devices', (req,res)=> res.json([{id:'stetho-x100',name:'Stetho-X100',type:'stethoscope'}]));
app.post('/devices/:id/capture', (req,res)=> res.json({sessionId:'sess-'+Math.floor(Math.random()*10000),status:'started'}));
app.post('/capture/:id/stop', (req,res)=> res.json({status:'stopped'}));
app.listen(6000, ()=> console.log('Device bridge mock on 6000'));
