var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser');
//user modal
var usersController=require('./controllers/users');
var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:false
    }));

app.use(express.static('public'));

//routes
app.get('/',function(request,response){
response.render('index',{
              title:"Home",
              users:usersController.getuser
             });
});
app.get('/users/:id',function(request,response){
    var user=users.getuser(request.params.id);
response.render('profile',{
              title:"user profile",
              user:usersController
             });
});
app.get('/login',function(request,response){
response.render('login',{
    title:"login"
});
});
app.post('/login',usersController.postLogin);
app.get('/signup',function(request,response){
response.render('signup',{
    title:"signup"
});
});
app.get('/about',function(request,response){
response.render('aboutme',{
              title:"about" 
});
});
app.listen(3000);