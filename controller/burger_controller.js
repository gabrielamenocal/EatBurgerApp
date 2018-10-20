var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response){
    burger.all(function(data){
        var hbsObject = { burger: data };
        response.render("index",hbsObject);
    });
});

router.post("/api/burger", function(request, response){
    console.log(request.body);
    burger.create([
        "burger_name", "devoured"
    ], [ request.body.burger_name, request.body.devoured],function(result){
        response.json({id: result.insertID});
    });    
});

router.put("/api/burger/:id", function(request, response){
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.update(
        {devoured: request.body.devoured}, condition, function(result){
            if(result.changeRows == 0){
                return response.status(404).end();
            } else{
                response.status(200).end();
            }
        
    });    
});


module.exports = router;