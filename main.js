'use strict';

$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf('/')+1);
     $('#nav a').each(function(){
          if($(this).attr('href') === pgurl || $(this).attr('href') === '' )
        $(this).addClass('active');
     });
});

$(function(){
  $('.owl-carousel').owlCarousel({
    items : 1,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    autoplayHoverPause: true,
  });

});

// sticky footer //
$(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});