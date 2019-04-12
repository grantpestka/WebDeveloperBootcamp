function prpBkg(){
    //select all divs and give them a purple background
    $("div").css("backgroundColor", "purple");
}

function highlight(){
    //select all divs with class "highlight" and make the 200px wide
    $(".highlight").css("width","200px");
}

function orgBdr(){
    //select the div with id "third" and give it a orange border
    $("#third").css("border","2px solid orange");
}

function colPnk(){
    //BONUS: select the first div only and change its font color to pink
    $("div").eq(0).css("color", "pink")
}