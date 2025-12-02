const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin:true}));
app.get('/api/patients', (req,res)=> res.json([{id:1,nom:'Jean',prenom:'Pierre'}]));
exports.api = functions.https.onRequest(app);
