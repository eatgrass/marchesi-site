$(document).ready(function(){

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    var $window = $(window);

    // scroll sticky
    var $stickies = $(".product--sticky").each(function(){
        var $thisSticky = $(this).wrap('<div class="StickyWrap" />');
        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight())
            .parent()
            .height($thisSticky.outerHeight());
    })

    $window.off("scroll.stickies").on("scroll.stickies", function(){
        $stickies.each(function(i) {
            var $thisSticky = $(this),
            $stickyPosition = $thisSticky.data('originalPosition');

            if ($stickyPosition <= $window.scrollTop()) {

                var $nextSticky = $stickies.eq(i + 1),
                $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

                $thisSticky.addClass("fixed");

                if ($nextSticky.length > 0 && ($thisSticky.offset().top - $thisSticky.data('originalHeight'))>= $nextStickyPosition) {

                    $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
                }

            } else {

                var $prevSticky = $stickies.eq(i - 1);

                $thisSticky.removeClass("fixed");

                if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') ) {

                    $prevSticky.removeClass("absolute").removeAttr("style");
                }
            }
        });
    });


    //scroll fade in

    $window.scroll(function(){
        $('.scroll-fade').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){

                $(this).addClass('animated fadeInUp');

            }
        });
    })
});
