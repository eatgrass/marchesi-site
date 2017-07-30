$(document).ready(function(){


    $('.gallery-slider').bxSlider({
        controls:false,
        pager: false,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 450,
        captions: true,
        slideMargin: 50,
        ticker: true,
        tickerHover: true,
        speed:40000,
        wrapperClass:'slider-wrapper'
    });
});