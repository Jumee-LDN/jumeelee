
const $title = $('.title').eq(0);
const $allTitles = $('[id=title]');
const $aboutKeywordBox = $('.about-keyword-box');
const $aboutContentBox = $('.about-contents-box');
const $natureKeywordBox = $('.nature-keyword-box');
const $natureContentBox = $('.nature-contents-box');

const windw = this;
const $this = this;

$.fn.siteTitleEffect = function ( pos ) {
  const $this = this,
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
$title.siteTitleEffect(1380);

const titleToUpperCase = () => {
  for ( let i=0; i < $allTitles.length; i++){
    $allTitles[i].innerHTML = $allTitles[i].innerHTML.toUpperCase();
  }
};
titleToUpperCase();

$aboutKeywordBox.click(
  () => {
    $aboutContentBox.toggle();
  }
);
$natureKeywordBox.click(
  () => {
    $natureContentBox.toggle();
  }
);
