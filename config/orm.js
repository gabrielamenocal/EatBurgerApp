var connection = require("./connection.js");

var orm = {

    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [table], 
            function(error, result) {
                if (error) throw error;
                console.log(result);
                callback(result);
        });
      },    

    insertOne: function(table, burger_name, state, callback) {
     // INSERT INTO burgerTable (burger_name, devoured) VALUES ("tripleCheeseBurger", TRUE);
      var queryString = "INSERT INTO ? VALUES (?,?) ";
      console.log(queryString);
      connection.query(queryString, [table, burger_name, state], 
        function(error, result) {
            if (error) throw error;
            console.log(result);
            callback(result);
      });
    },

    updateOne: function(table, burger_name, newValue, callback) {      
        var queryString ="UPDATE ? SET ? WHERE ?";
      connection.query(queryString, [table, newValue, burger_name],
        function(err, result) {
          if (err) throw err;
          console.log(result);
          callback(result);
        }
      );
    }
  };

  module.exports= orm;