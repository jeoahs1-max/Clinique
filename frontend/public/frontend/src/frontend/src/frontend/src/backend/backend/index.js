const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const patients = [{id:1,nom:'Jean',prenom:'Pierre',age:34,zone:'Delmas'}];

app.get('/api/patients',(req,res)=> res.json(patients));
app.post('/api/patients',(req,res)=> { const p=req.body; p.id=patients.length+1; patients.push(p); res.json(p); });
app.post('/api/consultations',(req,res)=> { const c=req.body; c.id=Math.floor(Math.random()*100000); c.created_at=new Date(); res.json(c); });
app.get('/api/devices',(req,res)=> res.json([{id:'stetho-x100', label:'Stetho-X100 (BLE)'}]));

app.listen(4000, ()=> console.log('Backend listening on 4000'));
