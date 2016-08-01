$(function() {

  var img = $('.hexagon');
  var offset = img.offset();

  $('.hexanote').delay(500).queue(function(){
    $(this).removeClass('hidden');
    $(this).dequeue();
  });
  $('#lead').delay(3000).animate({marginTop: '-=225px'}, {duration: 750});
  img.delay(4000).animate({opacity: '1'}, {duration: 750});

  $(document).mousemove(function(e){
    var center_x = (offset.left) + (img.width()/2);
    var center_y = (offset.top) + (img.height()/2);
    var mouse_x = event.pageX; var mouse_y = event.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;

    img.css('-moz-transform', 'rotate('+degree+'deg)');
    img.css('-webkit-transform', 'rotate('+degree+'deg)');
    img.css('-o-transform', 'rotate('+degree+'deg)');
    img.css('-ms-transform', 'rotate('+degree+'deg)');
    img.css('-webkit-filter', 'hue-rotate('+degree+'deg)')

    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var $pageX = parseInt(e.pageX / $width,10);
    var $pageY = parseInt(e.pageY / $height,10);
    $('.polygon').css("stroke", "rgb("+$pageX+","+$pageY+","+$pageX+")");
  }); 

});