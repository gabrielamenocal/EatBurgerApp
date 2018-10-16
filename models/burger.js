var orm = require("../config/orm.js");

var burger = {

    all:function(callback){
        orm.selectAll("burgertable", function(response){
            callback(response);
        });
    },

    create: function(col, val,callback){
        orm.create("burgertable", col, val, function(response){
            callback(response);
        });
    },

    update: function(col, val, new_val, callback){
        orm.create("burgertable", col, val, new_val, function(response){
            callback(response);
        });
    },
};

module.exports = burger;


