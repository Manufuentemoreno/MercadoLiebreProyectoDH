const path = require("path");

let mainController = {
    home : function (req,res) {
        res.sendFile(path.resolve(__dirname,"../views/home.html"))
    },

    createProfile : function(req, res){
        res.sendFile(path.resolve(__dirname,"../views/register.html"))
    },

    newProduct : function(req, res){
        res.sendFile(path.resolve(__dirname,"../views/newProduct.html"))
    },

    logIn : function(req, res){
        res.sendFile(path.resolve(__dirname,"../views/login.html"))
    }

};

module.exports = mainController;