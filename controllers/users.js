var userModel=require('../models/Users');

getusers=function() {
    return userModel.users;
}
getuser=function(id) {
    for(var i=0;i<userModel.users.length;i++) {
        if(userModel.users[i].id==id)
            return userModel.users[i];
    }
}

var compareAuth=function(username,password){
    for(var i=0;i<userModel.users.length;i++)
    {
        if (userModel.users[i].username==username && users[i].password==password)
        {
        return userModel[i];
            //return true;
        }
    }
    return false;
}
exports.postLogin=function(request,response){
    var result=compareAuth(request.body.email,request.body.password);
    console.log(request.body);
    console.log(request.body.email);
     console.log(request.body.password);
    if(result)
    {
    response.send("Login Successful!!.Hi" +result.name);
    }
    else
    {
        response.send("failed");
    }
        
}