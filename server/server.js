const express = require('express');
const uuid = require('uuid'); //allowing people to add helicopters in future.
const app = express();
const data = require('./data2.json');
const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (_req,res,next)=>{
    res.send("Hi there and Welcome to Heli-info")
    next()
})

app.listen(8080, ()=> console.info('You are running on Port:8080 with Heli-info by Jordan Cheng.'));

//Getting list of helicopters.
app.get('/list', (req,res,next)=>{
    const heliList=data.map(list=>{
        const heliObject = {}
        heliObject.manufacturer_code = list.manufacturer_code,
        heliObject.model_name = list.model_name,
        heliObject.image = list.image
        return heliObject
    })
    res.send(heliList)
    next()
})

//Getting a single helicopter.
app.get('/:modelname', (req,res,next)=>{
    res.send(data.find(oneHeli=>(oneHeli.model_name === req.params.modelname)))
}
)

//Get test for the image.
app.get('/testingtest', (req,res,next)=>{
    res.send(data)
    
    next()
})