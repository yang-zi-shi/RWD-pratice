$(document).ready(function(){
    $(".fa-bars").click(function(){
        $("nav .menu").toggleClass("active");
    });
    $("body").click(function(e){
        if(!$(e.target).hasClass("fa-bars")) $("nav .menu").removeClass("active");
    });
});