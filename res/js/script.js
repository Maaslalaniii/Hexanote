$(function() {

  $(".hexanote").delay(500).queue(function(){
    $(this).removeClass("hidden");
    $(this).dequeue();
    hexColor('1abc9c', 'english');
  });

  $("#lead")        .delay(3000).animate({ marginTop: "-=225px"}, { duration: 750 });
  $(".hexagon")     .delay(4000).animate({   opacity: "1"},       { duration: 750 });
  $(".subject-list").delay(4000).animate({   opacity: "1"},       { duration: 750 });

});

function hexColor(color, subject) {

  $(".subject") .css("color",  "#fff");
  $("#"+subject).css("color",  "#"+color);
  $(".polygon") .css("stroke", "#"+color);

}