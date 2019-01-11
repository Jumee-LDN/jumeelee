
const $title = $('.title').eq(0);
// const title = document.getElementsByClassName('title')[0];
var windw = this;

$.fn.followTo = function ( pos ) {
  var $this = this,
    $window = $(windw);

  $window.scroll(function(){
    if ($window.scrollTop() > pos) {
      $this.css({
        position: 'absolute',
        top: pos
      });
    } else {
      $this.css({
        position: 'fixed',
        top: 0
      });
    }
  });
};

$title.followTo(1380);
