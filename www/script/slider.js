$(document).ready(function(){    
    $("#slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<button type='button' class='slick-prev'></button>",
        nextArrow:"<button type='button' class='slick-next'></button>"
    });
});
