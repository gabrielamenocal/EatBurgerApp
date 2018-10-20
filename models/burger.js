var orm = require("../config/orm.js");

var burger = {

    all:function(callback){
        orm.selectAll("burgertable", function(response){
            callback(response);
        });
    },

    create: function(col, val,callback){
        console.log(val);
        console.log(col);
        orm.insertOne("burgertable", col, val, function(response){
            callback(response);
        });
    },

    update: function(col, val, new_val, callback){
        orm.updateOne("burgertable", col, val, new_val, function(response){
            callback(response);
        });
    },
};

module.exports = burger;


