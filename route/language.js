const app = require('express').Router()


app.get('/',(req,res)=>{
    res.render('lang')

})

module.exports=app