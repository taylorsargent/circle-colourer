var $input = $('#circle-colorer');
var $list = $(".list");

$('#circle-colorer').on('submit', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
