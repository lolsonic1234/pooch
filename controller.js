$(".text").click(function(){
    $('.codebox').append('<div class="box"><h1 class="textex" id="1">' + $(this).html() + '</h1></div>');
    
    window.setTimeout(function(){
        for(var i = 0; i < 10; i++){
            console.log("I have " + (i + 1) + " fingers!");
        }
    }, 5000)
})

