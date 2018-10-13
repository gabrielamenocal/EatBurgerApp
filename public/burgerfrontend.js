// var $ = require("jquery");


require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});

$(document).ready(function() {
        console.log( "ready!" );


    $("#submit").on("click", function(){
        console.log("Clicked");

    });
    
    





    
});
