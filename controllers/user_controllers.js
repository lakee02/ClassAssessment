const User=require('../models/user');
module.exports.user=function(req,res){

    return res.render('user',{
        title:"login page"
    });
}
// render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

// get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.Confirm_Password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signup');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users');
            })
        }else{
            return res.redirect('back');
        }
    })
}


module.exports.createSession=function(req,res){
    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error Account does not exists');
            return;
        }
        if(user){
            //if user is found
            User.findOne({password:req.body.password},function(err,user){
                // if(err){
                //     console.log('error incorrect password');
                //     return;
                // }
                //if password is incorrecrt
                if(user.password!=req.body.password){
                    return res.redirect('back');
                }
                //handle session creation
                res.cookie('user_id',user.id);
                return res.redirect('/users/home');
            })
        }
        else{
            //if user not found
            return res.redirect('back');
        }
        
    })
}