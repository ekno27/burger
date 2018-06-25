$(function(){
    function getInput(){
        var input = $("input").val().trim();
        if(input ===""){
            alert("Enter the name of your boiga!");
        }else{
            console.log(input);
            var newBurger ={
                burger_name: input,
                devoured: 0
            }
            //send the post request
            $.ajax("/api/burgers",{
                type:"POST",
                data: newBurger
            }).then(function(){
                console.log("Created new burger!");
                location.reload();
            });//end of ajax
        }
              
    }//end of function

    //click on each item to devour
    $("#not-eaten").on("click", "h3", function(){
        var currentID = $(this).attr("id");
        console.log(currentID);

        //change boolean value of sql column
        var changedObject = {
            devoured: 1
        }

        //update clicked item to "devoured"
        $.ajax("/api/burgers/"+ currentID, {
            type: "PUT",
            data: changedObject
        }).then(function(){
            console.log("Status changed!");
            location.reload();
        });//end of ajax
    });//end of event listenter

    //if enter or submit are pressed
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            
            getInput();
        }
    });
    $("#submit").on("click", function(){
        getInput();
    });

    
});
