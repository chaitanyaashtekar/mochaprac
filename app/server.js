var express=require('express');
var app=express();
var converter=require('./converter.js')

app.get('/charToUnicode',function(req,res){
console.log(req.query.char);

res.send(converter(req.query.char))
})
app.get('/unicodeToChar',function(req,res){
console.log(req.query.num);
res.send(converter(req.query.num))
})

app.listen(3000);