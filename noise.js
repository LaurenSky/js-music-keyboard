var loadPlay = function(sound) {
  sound.load();
  sound.play();
};

$(document).ready(function() {
  $('.note').on('click', function() {
    var noteSelected = $(this).html();
    // alert("You played note: " + noteSelected);
    var sound = $('#' + noteSelected + 'Audio')[0];
    loadPlay(sound);
  });

  $('body').keydown(function(event) {
    var sound = $('#' + event.key + 'Audio')[0];
    loadPlay(sound);
  });
});
