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
    TweenMax.killTweensOf($box1);
    //$box1 에 부여된 애니메이션 속성을 삭제.
    $box1.empty();
    // TweenMax.set($box1, {css: {x: 500, skewX: -25, autoAlpha: 0}});
    // TweenMax.to($box1, 0.65, {css: {x: 0, skewX: 0, autoAlpha: 1}, ease: Back.easeInOut});
    for(var i = 0; i < 10; i++) {
      var $box = $('<div class="box">&nbsp;</div>');
      // TweenMax.set($box, {css: {backgroundColor: '#ff0000', borderRadius: 50 + '%'}});
      // TweenMax.set($box, {css: {x: 100, backgroundColor: randomColor(), borderRadius: 50 + '%'}});
      // TweenMax.set($box, {css: {x: 100 * (i + 1), y: 100, backgroundColor: randomColor(), borderRadius: 50 + '%'}});
      // TweenMax.to($box, 0.5, {css: {x: 0, y: 0, borderRadius: 0, backgroundColor: '#000000'}});
      // TweenMax.set($box, {css: {x: 100 * (i + 1), autoAlpha: 0}});
      // TweenMax.to($box, 0.25, {css: {x: 0, autoAlpha: 1}, delay: 0.25 * i});
      // TweenMax.to($box, 0.25, {css: {x: 0, autoAlpha: 1}, delay: 0.05 * i});
      // TweenMax.to($box, 0.25, {css: {x: 0, autoAlpha: 1}, delay: 0.05 * i, ease: Power3.easeInOut});
      // TweenMax.set($box, {css: {x: 100 * (i + 1), autoAlpha: 0, rotation: 180, scale: 0.2}});
      // TweenMax.to($box, 0.4, {css: {x: 0, autoAlpha: 1, rotation: 0, scale: 1}, delay: 0.1 * i, ease: Power3.easeInOut});
      $box1.append($box);

      TweenMax.set($box, {css: {x: 100 * (i + 1), autoAlpha: 0, scaleX: 0, rotationX: 180}});
      TweenMax.to($box, 1, 
        {
          ease: Power3.easeInOut,
          onComplete: function(){
            console.log(this.target, '애니메이션 완료');
            // TweenMax.set($(this.target), {css: {autoAlpha: 0}});
            // TweenMax.to($(this.target), 0.5, {css: {backgroundColor: '#ff0000'}});
            TweenMax.to($(this.target), 0.5, {css: {backgroundColor: randomColor(), autoAlpha: 0}, delay: 2});
          },
          css: {
            x: 0, 
            autoAlpha: 1, 
            scaleX: 1, 
            rotationX: 0
          },
          delay: 0.1 * i
        });
      
      
      /*
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
      //{css: {}, delay: Number} - delay : 딜레이. 몇초 후에 애니메이션이 실행되는지.
      TweenMax.to(element, duration, {css: {width: 100, y: 0, autoAlpha: 1}, ease: ease});
      //{css: {}, ease: easeProperty} - ease : 가속도.
      TweenMax.to(element, duration, {css: {width: 100, y: 0, autoAlpha: 1}, onComplete: function(){}});
      //{css: {}, onComplete: func()} - onComplete : 애니메이션이 실행 완료된 후의 callback 함수.
      TweenMax.to();
      //to - 애니메이션 설정.
      */
    }
  };
});
})(jQuery);