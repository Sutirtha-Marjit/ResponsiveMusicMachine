var http = require("http");
var express = require("express");
var port = process.env.port || 4500;
var app = express();
var server;

app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.static('ui'));
app.get('/',function(req,res){
    res.render('example_layout',{title:'main page'});
    
});

server = http.createServer(app).listen(port,function(){
    
    console.log('Server started at '+port+' port');
    
})
