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

        _isResize = false;
        _isAni = false;

        var $first = $bannerItem.eq(0).clone(), $last = $bannerItem.eq(_itemMax - 1).clone();
        $bannerContainer.prepend($last).append($first);
        $bannerItem = $bannerContainer.children('.banner-item');
        $bannerItemImg = $bannerItem.children('.image-area');
        $bannerItemImgEl = $bannerItemImg.children('img');

        dotNavCheck();
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
        $bannerContainer.width(_bannerW * (_itemMax + 2));
        $bannerItem.width(_bannerW);

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
            _cuId--;
            if (_cuId < 0) _cuId = _itemMax - 1;
            // if (_cuId > 0) _cuId--;
        } else if ($el.is($paddleNavNextEl)) {
            _cuId++;
            if (_cuId > _itemMax - 1) _cuId = 0;
            // if (_cuId < _itemMax - 1) _cuId++;
        }
        bannerSlide();
    }

    //Func :: Dot Nav Check.
    var dotNavCheck = function() {
        $dotNavEl.removeClass('selected');
        $dotNavEl.eq(_cuId).addClass('selected');
    }

    //Func :: Banner Slide (Animation / Static)
    //@param b (Boolean) - false (default) : Animation, true : Static.
    var bannerSlide = function(b) {
        var bool = (b) ? b : false;
        _isAni = true;
        if (!bool) {
            //단계 범위에 따라 속도를 다르게 지정하기 위한 계산.
            var duration = _duration + _addDuration * Math.abs(_exId - _cuId),
                left = _bannerW * (_cuId + 1) * -1;
            /*********/
            if (_exId === 0 && _cuId === _itemMax -1) {
                //처음에서 마지막으로 이동되는 애니메이션 좌표.
                left = 0;
                duration = _duration + _addDuration;
            } else if (_exId === _itemMax - 1 && _cuId === 0) {
                //마지막에서 처음으로 이동되는 애니메이션 좌표.
                left = _bannerW * (_itemMax + 1) * -1;
                duration = _duration + _addDuration;
            }
            /*********/
            $bannerContainer.stop(true).animate(
                {'left' : left},
                {duration : duration, easing : 'easeInOutQuart', complete : function(){
                    /*
                    if (_exId === 0 && _cuId === _itemMax -1) {
                        $bannerContainer.stop(true).css({'left' : _bannerW * (_cuId + 1) * -1});
                    } else if (_exId === _itemMax - 1 && _cuId === 0) {
                        $bannerContainer.stop(true).css({'left' : _bannerW * (_cuId + 1) * -1});
                    }
                    */
                    if ((_exId === 0 && _cuId === _itemMax -1) || (_exId === _itemMax - 1 && _cuId === 0)) {
                        $bannerContainer.stop(true).css({'left' : _bannerW * (_cuId + 1) * -1});
                    }
                    dotNavCheck();
                    _exId = _cuId;
                    _isAni = false;
                    bannerRolling();
                }}
            );
        } else {
            var left = _bannerW * (_cuId + 1) * -1;
            $bannerContainer.css({'left' : left});
            _isAni = false;
            bannerRolling();
        }
    }

    //Func :: Banner Rolling.
    var bannerRolling = function() {
        clearInterval(_timer);
        _timer = setTimeout(bannerInterval, _time);
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