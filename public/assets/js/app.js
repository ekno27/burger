$(function(){
    function getInput(){
        var input = $("input").val().trim();
        if(input ===""){
            alert("Enter the name of your boiga!");
        }else{
            console.log(input);  
        }
              
    }

    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            
            getInput();
        }
    });

    $("#submit").on("click", function(){
        getInput();
    });
});
