const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log("In middleware 1");
    console.log(`REQUEST URL: ${req.url}`);
    next();
});


app.use((req, res, next) => {
    console.log("In middleware 2");
    next();
});


app.get('/profile', (req, res)=> {
    console.log("in profile"); 
    res.send('Profile page');
});3

app.listen(3000, ()=>{
    console.log("app is listening to port 3000");
});