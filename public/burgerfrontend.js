$(document).ready(function() {
        console.log( "ready!" );
        $("#message").hide();

        $.ajax({
            url: "/", 
            method: "GET"
        }).then(
            function(burgerData) {
                console.log("burgers added");

                var listBurgerAdded= $("#listBurgerAdded");
                var listBurgerDevoured= $("#listBurgerDevoured");

                for (var i=0; i<burgerData.lenght; i++){

                    listBurgerAdded.append(burgerData.name);
                    listBurgerDevoured.append(burgerData);
                };
                location.reload();                             
            }).fail(function(xhr, status, error){
            console.log(error);
            console.log(status);
            alert("Sorry, Something went wrong, cannot add burger..");
        });

    $("#burgerSubmit").on("click", function(){
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val(),
            devoured: false
        };

        $("#burger").val("");       

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              alert("Adding New Burger..");
              location.reload();
            }).fail(function(xhr, status, error){
            console.log(error);
            console.log(status);
            alert("Sorry, Something went wrong, cannot add burger..");
        });

    });

    $(".change-devoured").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var burger = {
          name: $("#burger").val().trim(),
          devoured: $("[name=burger_name]:checked").val().trim()
        };   

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: burger.devoured
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }).fail(function(xhr, status, error){
            console.log(error);
            console.log(status);
            alert("Sorry, Something went wrong, cannot add burger..");
        });  
        
    });
    
     
});