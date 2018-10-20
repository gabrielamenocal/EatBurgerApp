var connection = require("./connections.js");

var orm = {

    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM burgertable";
        connection.query(queryString,  
            function(error, result) {
                if (error) throw error;
                console.log(result);
                callback(result);
        });
      },    

    insertOne: function(table, column, values, callback) {
     //INSERT INTO burgerTable (burger_name, devoured) VALUES ("tripleCheeseBurger", TRUE);
      var queryString = "INSERT INTO burgertable VALUES (?,?,?) ";
      console.log(queryString);
      connection.query(queryString, [null, values[0], values[1] === 'false' ? false: true], 
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