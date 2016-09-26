'use strict'
//CAROUSEL
$(function() {
  $('.jcarousel').jcarousel({
      wrap: 'circular'
  });
  
  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true,
  });

   $('.jcarousel__left')  
  .jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel__right')  
  .jcarouselControl({
      target: '+=1'
  });

//AJAX
// MASONRY
  $.support.cors = true;
  function masonry() {
    var $container = $('#masonry-container');
       $container.isotope({
       itemSelector: '.masonry__item',
       masonry: {
                 gutter: 20
                }
    });
  };

   var queryDefault = "http://api.pixplorer.co.uk/image?&amount=1&size=tb";
   var parent;
   var linkArray = [];
   var objDefault = {
    data: {
           images: []
          }
   };
   var imagesDefault = objDefault.data.images;
  function searchDefault(link){
    for (var i = 0; i < 7; i++) {
        
      $.ajax({ 
        type: 'GET',
        url: link,
        dataType: 'json',
        cache: false,
        success: function(data){ 
                                var obj = {
                                  data: data
                                };                                
                                linkArray.push(data.images[0]);
                                if(linkArray.length == 7) {
                                   objDefault.data.images = linkArray;
                                   renderList(objDefault);
                                };
                                
                               }
       });

      
    };//for
  };
  


   function search(link) {
    
    $.ajax({ 
        type: 'GET',
        url: link,
        dataType: 'json',
        cache: false,
        success: function(data){ 
                                var obj = {
                                  data: data
                                };
                                renderList(obj);
                               }
    })
  };
  
  function renderList(obj) {
    $('#start__container').after('<section id="masonry-container" class="clearfix"></section>');
    var html = $('#images-template').html();
    var content = tmpl(html, obj);
    setTimeout(function(){
    $('#masonry-container').append(content);
    masonry();
    }, 300);
  };

  
   $('.find__link--2').on('click', function (e){
       e.preventDefault();
       var oldItems = $('#masonry-container');
       oldItems.remove();
       var word = $('.holiday__input__text').val();
       $('.holiday__input__text').val("");
       var link = "http://api.pixplorer.co.uk/image?word="+word+"&amount=7&size=tb";
       search(link);
       setTimeout(take, 3000);
    });



//MODAL
   function createModal(link) {
    var $body = $('body');
    var $modal = $('<div class="modal--back"><img class="modal" src="'+link+'"></div>');
    $body.append($modal);
    $('.modal--back').on('click', hideModal);
  };

  function hideModal(){
    $('.modal').remove();
    $('.modal--back').remove();
  }

  function take(){
    $('.masonry__shadow').hover(function(){
       var title = $(this).parent().find('.title--image');
       title.css('z-index', '-5');
    }, function(){
       var title = $(this).parent().find('.title--image');
       title.css('z-index', '1');
    });


    $('.masonry__shadow').on('click', function(){
          var image = $(this).parent().find('.masonry__image');
          console.log(image);
          var link = image[0].currentSrc;
          createModal(link);
    })
  };
  
  searchDefault(queryDefault); 
  setTimeout(take, 3000);

});