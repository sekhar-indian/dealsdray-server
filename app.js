const express=require('express');
const app=express();
const mongoose=require('mongoose');
const admin=require('./routers/admin');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(admin);

mongoose    
    .connect('mongodb://localhost:27017')
    .then(()=>app.listen(8000))
    .catch(()=>console.log('err'))
    