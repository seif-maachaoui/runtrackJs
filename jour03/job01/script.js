
// At first, I Select p element with jQuery and use hide method to hide text
$("p").hide();

// Select btn class with jQuery to use show method to show text
$("#btn").click(function(){
    $("p").show();
});

//Select hidden-btn class with jQuery to hide text
$("#hidden-btn").click(function(){
    $("p").hide();
});
