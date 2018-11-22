function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

(function($){
$(document).ready(function() {
  var $box1 = $('#box-1');
  var $box2 = $('#box-2');
  var $btnPlay = $('#btn-play');

  $btnPlay.on('click', function(e) {
    e.preventDefault();
    play();
  });

  var play = function() {
    $box1.empty();
    for(var i = 0; i < 10; i++) {
      var $box = $('<div class="box">&nbsp;</div>');

      TweenMax.set(element, {css: {width: 200, y: 100, opacity: 0}});
      //element{width:200px;transform:translateY(100px);opacity:0}
      TweenMax.set(element, {css: {width: 150 + '%'}});
      //element{width:150%}
      TweenMax.set(element, {css: {height: 100 + 'vh'}});
      //element{height:100vh}
      TweenMax.set(element, {css: {autoAlpha: 0}});
      //element{visibility:hidden;opacity:0}
      TweenMax.set(element, {css: {autoAlpha: 1}});
      //element{visibility:visible;opacity:1}
      //TweenMax.set();
      //set - 스타일을 변경.

      TweenMax.to(element, duration, {css: {width: 100, y: 0, autoAlpha: 1}});
      //duration - 애니메이션 속도.
      //{css : {}} - 애니메이션 최종 스타일 적용.
      TweenMax.to(element, duration, {css: {width: 100, y: 0, autoAlpha: 1}, delay: delayDuration});
      //{css: {}, delay: {}} - delay : 딜레이. 몇초 후에 애니메이션이 실행되는지.
      TweenMax.to(element, duration, {css: {width: 100, y: 0, autoAlpha: 1}, onComplete: function(){}});
      //{css: {}, onComplete: func()} - onComplete : 애니메이션이 실행 완료된 후의 callback 함수.
      TweenMax.to();
      //to - 애니메이션 설정.
      
      $box1.append($box);
    }
  };
});
})(jQuery);