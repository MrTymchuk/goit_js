(function($){
    var defaults = {
        picWidth: 305,
        animate: false,
        animateSpeed: 1000,
        link: 'a.fancybox',
        leftControl : '.arrow-left',
        rightControl : '.arrow-right',
        elementsList :'.carousel-list'
    }

    var options;
    $.fn.carousel = function(params){
        //extend the default options with custom
        options = $.extend({}, defaults, options, params);

        /* обертка слайдера */
        var elementsList = $(options.elementsList);
        
        /* ссылки на предудыщий и следующий слайд */
        var leftControl = $(options.leftControl);
        var rightControl = $(options.rightControl);
        
        /*автостарт*/
        var playLink = $('.auto');
        var is_animate = false;

        /* смещение слайдера */
        var pixelsOffset = -options.picWidth;
        
        
        /* Клик по ссылке на следующий слайд */
        var scrollRight = (function(){
            if(!elementsList.is(':animated')) {
                elementsList.animate({left: pixelsOffset}, 500, function(){
                    elementsList
                        .find('.slide-item:first')
                        .appendTo(elementsList)
                        .parent()
                        .css({'left': 0});
                });
            };
        });

        /* Клик по ссылке на предыдующий слайд */
        var scrollLeft = (function(){
            if(!elementsList.is(':animated')) {
                elementsList
                    .css({'left': pixelsOffset})
                    .find('.slide-item:last')
                    .prependTo(elementsList)
                    .parent()
                    .animate({left: 0}, 500);
            };
        });
        
        leftControl.click(function() {
            pauseAnimation(scrollLeft);
        });

        rightControl.click(function() {
            pauseAnimation(scrollRight);
        });
            
        /*анимация*/
        function startAnimation() { 
            $timerId = setTimeout(function tick() {
                scrollRight();
                $timerId = setTimeout(tick, options.animateSpeed);
            }, options.animateSpeed);
        };

        function stopAnimation() {
            if ($timerId) clearTimeout($timerId);
        };

        function pauseAnimation(customFunction) {
            if ((options.animate)&&($timerId)) {
                stopAnimation();
            };
            customFunction();
            if (options.animate) {
                startAnimation();
            };
        };

        if (options.animate === true) {
            startAnimation();
            flag = true;
        } else {
            stopAnimation();
            flag = false;
        };
        
        /*fancybox*/
        var $body = $('body');
        var $modal;
        var $overlay;
        var link = $(options.link);

        link.on('click',function showModal (e) {
            if ((options.animate)&&($timerId)) {
                stopAnimation();
            }
            link = $(this); 
            var href = link.attr('href');

            $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
            $overlay = $('<div class="fancybox-overlay"></div>');

            e.stopPropagation();
            e.preventDefault();

            $body.append($overlay);
            $body.append($modal);
            $overlay.one('click',  function hideModal() {
                $modal.hide();
                $overlay.hide();
                if (options.animate) {
                    startAnimation();
                };
            });
        });
        return this;
    };

})(jQuery);