
const $title = $('.title').eq(0);
const $allTitles = $('[id=title]');
const $aboutKeywordBox = $('.about-keyword-box');
const $aboutContentBox = $('.about-contents-box');
const $natureKeywordBox = $('.nature-keyword-box');
const $natureContentBox = $('.nature-contents-box');
const $skillKeywordBox = $('.skill-keyword-box');
const $skillContentBox = $('.skill-contents-box');
const $foodKeywordBox = $('.food-keyword-box');
const $foodContentBox = $('.food-contents-box');
const $artKeywordBox = $('.art-keyword-box');
const $artContentBox = $('.art-contents-box');
const $lifeKeywordBox = $('.life-keyword-box');
const $lifeContentBox = $('.life-contents-box');
const $contactKeywordBox = $('.contact-keyword-box');
const $contactContentBox = $('.contact-contents-box');
const $arrow = $('.arrow');

const windw = this;

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

// ABOUT SECTION
$aboutKeywordBox.click(
  () => {
    $aboutContentBox.toggle();
  }
);
$aboutKeywordBox.hover(
  ()=> {
    $arrow[0].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[0].src = './src/images/right-arrow.png';
  } );
$aboutContentBox.click(
  () => {
    $aboutContentBox.toggle();
  }
);
// SKILL SECTION
$skillKeywordBox.click(
  () => {
    $skillContentBox.toggle();
  }
);
$skillKeywordBox.hover(
  ()=> {
    $arrow[1].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[1].src = './src/images/right-arrow.png';
  });
$skillContentBox.click(
  () => {
    $skillContentBox.toggle();
  }
);

// NATURE SECTION
$natureKeywordBox.click(
  () => {
    $natureContentBox.toggle();
  }
);
$natureKeywordBox.hover(
  ()=> {
    $arrow[1].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[1].src = './src/images/right-arrow.png';
  });
$natureContentBox.click(
  () => {
    $natureContentBox.toggle();
  }
);
// FOOD SECTION
$foodKeywordBox.click(
  () => {
    $foodContentBox.toggle();
  }
);
$foodKeywordBox.hover(
  ()=> {
    $arrow[2].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[2].src = './src/images/right-arrow.png';
  });
$foodContentBox.click(
  () => {
    $foodContentBox.toggle();
  }
);
// ART SECTION
$artKeywordBox.click(
  () => {
    $artContentBox.toggle();
  }
);
$artKeywordBox.hover(
  ()=> {
    $arrow[3].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[3].src = './src/images/right-arrow.png';
  });
$artContentBox.click(
  () => {
    $artContentBox.toggle();
  }
);
// LIFE SECTION
$lifeKeywordBox.click(
  () => {
    $lifeContentBox.toggle();
  }
);
$lifeKeywordBox.hover(
  ()=> {
    $arrow[4].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[4].src = './src/images/right-arrow.png';
  });
$lifeContentBox.click(
  () => {
    $lifeContentBox.toggle();
  }
);
// CONTACT SECTION
$contactKeywordBox.click(
  () => {
    $contactContentBox.toggle();
  }
);
$contactKeywordBox.hover(
  ()=> {
    $arrow[5].src = './src/images/click-green.png';
  },
  ()=> {
    $arrow[5].src = './src/images/right-arrow.png';
  });
$contactContentBox.click(
  () => {
    $contactContentBox.toggle();
  }
);
