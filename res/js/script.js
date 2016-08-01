$(function() {

  var hexagon = $('.hexagon');
  var hexanote = $('.hexanote');
  var lead = $('#lead');
  var subjectList = $('.subject-list');


  hexanote.delay(500).queue(function(){
    hexanote.removeClass('hidden');
    hexanote.dequeue();
  });

  lead.delay(3000).animate({marginTop: '-=225px'}, {duration: 750});
  hexagon.delay(4000).animate({opacity: '1'}, {duration: 750});
  subjectList.delay(5000).animate({opacity: '1'}, {duration: 750});


});

function hexColor(color) {
  $('.polygon').css("stroke", "#"+color);
}