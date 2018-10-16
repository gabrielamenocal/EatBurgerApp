$(document).ready(function() {
        console.log( "ready!" );
        $("#message").hide();

        // $.ajax({ url: "/app/friends", method: "GET" })
        //   .then(function(friendsData) {
    
        //     console.log(friendsData);
   
        //     for (var i = 0; i < friendsData.length; i++) {
    
        //       var yourResults = $("#yourResults");
    
        //       var listItem = $("<li class='list-group-item mt-4'>");
    
        //       listItem.append
        //       (
        //         $("<h2>").text("Friend #" + (i + 1)),
        //         $("<hr>"),
        //         $("<h3>").text("Name: " + friendsData[i].name),
        //         $("<img width='150px'>").attr("src",  friendsData[i].photo),
        //         $("<h3>").text("score: " + friendsData[i].scores),
        //         $("<h3>").text("Toral score: " + friendsData[i].totalScore),
        //       );

        //       yourResults.append(listItem)

        //  };

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