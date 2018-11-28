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
  var $btnPlay = $('#btn-play');

  $btnPlay.on('click', function(e) {
    e.preventDefault();
    play();
  });
  var tl = new TimelineMax();
  //TimelineLite(), TimelineMax() - 차이점 : TweenLite, TweenMax 의 차이.
  //var tl = new TimelineMax(options);
  //new TimelineMax(opts);
  //opts = {}
  //new TimelineMax({repeat: 2, yoyo: true, paused: true, delay: 1.0});
  //javascript 에서 클래스처럼 사용.
  //new 는 함수의 재사용.
  //초기 세팅도 함수의 옵션값에 따라서 설정.
  //TimelineMax 의 가이드 라인 옵션에 따라서 속성값을 부여.
  var play = function() {
    TweenMax.killTweensOf($box1);
    $box1.empty();
    var label = 'box';
    for(var i = 0; i < 10; i++) {
      if(i > 0 && i < 2){
        label = '-=0.1';
      }else if(i >= 2 && i < 5){
        label = 'box1';
      }else if(i >= 5 && i < 8){
        label = 'box2';
      }else{
        label = '+=0.1';
      }
      var $box = $('<div class="box">&nbsp;</div>');
      // tl.add(TweenMax.to());
      // tl.add(TweenMax.to());
      // tl.add(TweenMax.to());
      // tl.add(TweenMax.to());
      // tl.add(TweenMax.to());
      // tl.add(TweenMax.to(element, duration, {css: {x: 0}})) === tl.to(element, duration, {css: {x: 0}})
      TweenMax.set($box, {css: {x: 100 * (i + 1), autoAlpha: 0, scaleX: 0, rotationX: 180}});
      // tl.to($box, 0.25, {css: {x: 0, autoAlpha: 1, scaleX: 1, rotationX: 0}, ease: Power3.easeInOut});
      // tl.to($box, 0.25, {css: {x: 0, autoAlpha: 1, scaleX: 1, rotationX: 0}, ease: Power3.easeInOut}, '-=0.1');
      // tl.to($box, 0.25, {css: {x: 0, autoAlpha: 1, scaleX: 1, rotationX: 0}, ease: Power3.easeInOut}, '+=0.1');
      tl.to($box, 0.4, {css: {x: 0, autoAlpha: 1, scaleX: 1, rotationX: 0}, ease: Power3.easeInOut}, label);
      //label. - 
      //tl.add('boxlabel1').to(~~~, 'boxlabel1').to(~~~, 'boxlabel1');
      // TweenMax.to($box, 1, {css: {x: 0, autoAlpha: 1, scaleX: 1, rotationX: 0}, delay: 0.1 * i, ease: Power3.easeInOut}x);
      $box1.append($box);
    }
  };
  
});
})(jQuery);