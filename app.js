// const http = require('http');

const bodyParser = require('body-parser');
const express=require('express');

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop')

// const routes = require('./routes');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
    res.status(404).send("<h1>PaGe NoT FoUnD</h1>")
})

app.listen(4000);

// const server = http.createServer(app);

// server.listen(3000);


// app.use('/add',(req,res,next)=>{
//     console.log('In the middleware');
//     res.send('<h1>This is Add router</h1>')
//     // next();
// });