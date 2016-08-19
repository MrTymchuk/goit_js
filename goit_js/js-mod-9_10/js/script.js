$(function() {

    // Carousel

    $('.jcarousel').jcarousel(); 

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

   $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .jcarouselPagination();

    // Selectbox

    $("#country_id").selectbox();

    // Menu

    $( '.dropdown' ).hover(function() {
      $(this).children('.sub-menu').slideDown(200);

      $('.sub-menu').mouseover(function() {
            $('.sub-menu').css('background', '#254668');
          })
          .mouseleave(function() {
            $('.sub-menu').css('background', '#243241');
          });
    },
          function(){
                  $(this).children('.sub-menu').slideUp(200);
          }
          );
});
