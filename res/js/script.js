$(function() {
  
  setTimeout(function() {
    $('.hexanote').removeClass('hidden');
    $('#lead').delay(3000).animate({marginTop: '-=225px'}, {duration: 750});
    $('.hexagon').delay(3500).animate({opacity: '1'}, {duration: 750});
  }, 500);

})();