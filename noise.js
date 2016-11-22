$(document).ready(function() {
  $('.note').on('click', function() {
    var noteSelected = $(this).html();
    alert("You played note: " + noteSelected);
    var sound = $('#' + noteSelected + 'Audio')[0];
    sound.load();
    sound.play();
  });

  $('body').keydown(function(event) {
    var sound = $('#' + event.key + 'Audio')[0];
    sound.load();
    sound.play();
  });
});
