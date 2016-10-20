
var winopen = false;



$(document).ready(function(){
    $(".bar1").css({
        top: "0vw",
    })
    $(".bar2").css({
        top: "0vw",
    })
    $(".bar3").css({
        top: "0vw",
    })
    
    window.setTimeout(function(){ 
        $(".bar1").css({
            top: "-100vw",
        })
                      
        $(".bar2").css({
            top: "-100vw",
        })
    
        $(".bar3").css({
            top: "-100vw",
        })
    }, 3000)
    
    
    window.setTimeout(function(){ 
        $(".main").css({
            left: "2vw",
        })
        $(".main2").css({
            left: "2vw",
        })
        $(".main3").css({
            left: "2vw",
        })
    }, 3500)
});


$(".main").mouseenter(function(){
    $(this).css({
        left: "3vw",
        backgroundColor: "white"
    })
});

$(".main").mouseleave(function(){
    $(this).css({
        left: "2vw",
        backgroundColor: "#d2d1de"
    })
});



$(".main2").mouseenter(function(){
    $(this).css({
        left: "3vw",
        backgroundColor: "white"
    })
});

$(".main2").mouseleave(function(){
    $(this).css({
        left: "2vw",
        backgroundColor: "#d2d1de"
    })
});



$(".main3").mouseenter(function(){
    $(this).css({
        left: "3vw",
        backgroundColor: "white"
    })
});

$(".main3").mouseleave(function(){
    $(this).css({
        left: "2vw",
        backgroundColor: "#d2d1de"
    })
});













$(".main").click(function(){
    
    
    
    
        
    if(!winopen){
        winopen = true;
        
        
        $(".rp").css({
            left: "0vw",
            transition: "all 2s linear 0s"
        })
        
        $(".rpinfo").css({
            left: "30vw",
            width: "50vw",
            transition: "all 1s linear 2.2s"
        })
        
        $(".rptext").css({
            opacity: 1,
            transition: "all 1s linear 2.5s"
        })
    }else{
        winopen = false;
        
        
        $(".rp").css({
            left: "100vw",
            transition: "all 0.5s linear 0s"
        })
        
        $(".rpinfo").css({
            left: "80vw",
            width: "20vw",
            transition: "all 0.25s linear 0s"
        })
        
        $(".rptext").css({
            opacity: 0,
            transition: "all 0.25s linear 0s"
        })
    }
    
});

