var $form = $('form');
var $input = $('#circle-colorer');
var $ball = $('.ball');

$input.on('change', function (e) {
  $ball.css('background-color', $input.val());
});
