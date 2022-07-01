$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin:50,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    var typed = new Typed(".lead", {
        strings:["Software Develop", "Computer Engineering"],
        typeSpeed:90,
        backSpeed:70,
        loop:true
    });

});