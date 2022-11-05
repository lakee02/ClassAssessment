const express=require('express');
const port=8000;
const app=express();
const router = require('./routes');
const db=require('./config/mongoose');


app.use(express.urlencoded({
    extended:false
}))

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assests'));
app.use(express.static('./images'));

//use express router
app.use('/',router);

app.listen(port,function(err){
    if(err){
        console.log(`error in running the surver : ${err}`);
        return;
    }
    console.log(`server is running on port : ${port} `);
})