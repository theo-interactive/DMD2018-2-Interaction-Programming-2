//jQuery Call.
(function($){
//Document Ready.
$(document).ready(function() {
    //Declaration :: Variable.
    var $win, $banner, $bannerWrap, $bannerContainer, $bannerItem, $bannerItemImg, $bannerItemImgEl,
        $dotNav, $dotNavEl,
        $paddleNav, $paddleNavEl, $paddleNavPrevEl, $paddleNavNextEl;

    var _cuId, _exId, _itemMax,
        _bannerW, _bannerH, _imgOW = 1000, _imgOH = 768, _imgRatio = _imgOH / _imgOW,
        _isResize, _isAni,
        _timer = 0;

    //Declaration :: Const Variable.
    var _duration = 300, _addDuration = 200, _time = 5000;

    //Layout.
    var layout = function() {
        $win = $(window);

        $banner = $('.banner');
        $bannerWrap = $banner.children('.banner-wrap');
        $bannerContainer = $bannerWrap.children('.banner-container');
        $bannerItem = $bannerContainer.children('.banner-item');
        $bannerItemImg = $bannerItem.children('.image-area');
        $bannerItemImgEl = $bannerItemImg.children('img');

        $dotNav = $banner.children('.dot-nav');
        $dotNavEl = $dotNav.find('span');

        $paddleNav = $banner.children('.paddle-nav');
        $paddleNavEl = $paddleNav.find('.arrow');
        $paddleNavPrevEl = $paddleNav.find('.arrow.prev');
        $paddleNavNextEl = $paddleNav.find('.arrow.next');
    }

    //Reset.
    var reset = function() {
        _cuId = 0;
        _exId = _cuId;
        _itemMax = $bannerItem.length;

        // _bannerW = $banner.width();
        // _bannerH = $banner.height();

        _isResize = false;
        _isAni = false;

        dotNavCheck();
        paddleNavCheck();
    }

    //Initialize.
    var init = function() {
        layout();
        reset();
        addEvent();
    }

    //Function.
    //Func :: Event Bind.
    var addEvent = function() {
        $win.on('resize.window', onResize).trigger('resize.window');
        $dotNavEl.on('click.dot.nav', onClickDotNav);
        $paddleNavEl.on('click.paddle.nav', onClickPaddleNav);
    }

    //Func :: Event Handler - Resize.
    var onResize = function() {
        _isResize = true;
        
        //window width / height 찾기.
        _bannerW = $win.width();
        _bannerH = $win.height();
        
        //banner 사이즈 변경.
        $banner.width(_bannerW).height(_bannerH);

        $bannerWrap.width(_bannerW);
        $bannerContainer.width(_bannerW * _itemMax);
        $bannerItem.width(_bannerW);

        //image 리사이즈.
        //2번째 방법.
        //원본이미지의 사이즈에 비례해서 계산.
        /*
        $.each([{},{},{}], function(index, data) {

        });
        */
        $.each($bannerItemImgEl, function(i, d) {
            var $el = $(d), imgW = 0, imgH = 0, imgT = 0, imgL = 0;
            //이미지 리사이즈 계산.
            imgW = _bannerW;
            imgH = imgW * _imgRatio;
            if (imgH <= _bannerH) {
                imgH = _bannerH;
                imgW = imgH / _imgRatio;
            }
            imgT = Math.round(_bannerH / 2 - imgH / 2);
            imgL = Math.round(_bannerW / 2 - imgW / 2);
            $el.width(imgW).height(imgH).css({'margin-top' : imgT, 'margin-left' : imgL});
        });
        
        bannerSlide(true);
        _isResize = false;
    }

    //Func :: Event Handler - Dot Nav Click.
    var onClickDotNav = function(e) {
        e.preventDefault();
        var id = $dotNavEl.index(this);
        if (_exId !== id) { //함수 호출 중복을 방지하기 위한 조건. 이전값 확인.
            _cuId = id;
            bannerSlide();
        }
    }

    //Func :: Event Handler - Paddle Nav Click.
    var onClickPaddleNav = function(e) {
        e.preventDefault();
        if (_isAni) return;
        var $el = $(this);
        if ($el.is($paddleNavPrevEl)) {
            if (_cuId > 0) _cuId--;
        } else if ($el.is($paddleNavNextEl)) {
            if (_cuId < _itemMax - 1) _cuId++;
        }
        bannerSlide();
    }

    //Func :: Dot Nav Check.
    var dotNavCheck = function() {
        $dotNavEl.removeClass('selected');
        $dotNavEl.eq(_cuId).addClass('selected');
    }

    //Func :: Paddle Nav Check.
    var paddleNavCheck = function() {
        if (_cuId === 0) {
            $paddleNavPrevEl.addClass('disabled');
        } else if (_cuId === _itemMax - 1) {
            $paddleNavNextEl.addClass('disabled');
        } else {
            $paddleNavEl.removeClass('disabled');
        }
    }

    //Func :: Banner Slide (Animation / Static)
    //@param b (Boolean) - false (default) : Animation, true : Static.
    var bannerSlide = function(b) {
        var bool = (b) ? b : false;
        _isAni = true;
        if (!bool) {
            //단계 범위에 따라 속도를 다르게 지정하기 위한 계산.
            var duration = _duration + _addDuration * Math.abs(_exId - _cuId);
            /*
            $bannerContainer.stop(true).animate({'left' : _bannerW * _cuId * -1}, duration, function() {
                dotNavCheck();
                paddleNavCheck();
                _exId = _cuId;
                _isAni = false;
            });
            */

            // $ .animate({css}, {duration : 500, dalay : 150, easing : 'easing' complete : function(){
            //}});
            $bannerContainer.stop(true).animate(
                {'left' : _bannerW * _cuId * -1},
                {duration : duration, easing : 'easeInOutQuart', complete : function(){
                    dotNavCheck();
                    paddleNavCheck();
                    _exId = _cuId;
                    _isAni = false;
                    bannerRolling();
                }}
            );
        } else {
            $bannerContainer.css({'left' : _bannerW * _cuId * -1});
            _isAni = false;
            bannerRolling();
        }
    }

    //Func :: Banner Rolling.
    var bannerRolling = function() {
        clearInterval(_timer);
        _timer = setTimeout(bannerInterval, _time);
        // setTimeout(function() {
        // }, 1000);
    }

    //Func :: Banner Interval.
    var bannerInterval = function() {
        _cuId++;
        if(_cuId >= _itemMax) _cuId = 0;
        bannerSlide();
    }
    
    //Call.
    init();
});
})(jQuery);