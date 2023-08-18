$(function(){
    $("#nav-toggle").on("click", function(event){
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#switch-language").toggleClass("active");
        $("#nav-toggle-item").toggleClass("active");
    });
    $("#switch-eng").toggleClass("active");
    $("#switch-ru").on("click", function(event){
        $(this).toggleClass("active");
        $("#switch-eng").removeClass("active");
    });
    $("#switch-eng").on("click", function(event){
        $(this).toggleClass("active");
        $("#switch-ru").removeClass("active");
    });
    $(window).resize(function () {
        var bodyWidth = $('body').width();
        if (bodyWidth < 450) {
            $(".photo-author").attr("src", "images/Denis_Novik_mobile.png");
        } else {
            $(".photo-author").attr("src", "images/Denis_Novik.png");
        }
    });
});