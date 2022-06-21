$(function(){

    /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smoth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top - 100;

        $("#nav a").removeClass("active");
        $this.addClass("active"); 

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000)
    });



    /* Menu nav toggle */
    $(".burger_menu").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });
    $(".nav_hidden").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });

    /* Collapse*/
    $("[data-collapse]").on("click", function(enevt){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active");
    });

    //Slider
    $(".clients_slider").slick({
        infinite: true,
        fade: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true
    });
    $(".horses_slider").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true
    });
    $(".reviews_slider").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true
    });

});