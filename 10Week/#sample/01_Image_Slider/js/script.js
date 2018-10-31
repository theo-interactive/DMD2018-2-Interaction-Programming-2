//jQuery Call.
(function($){
//Document Ready.
$(document).ready(function() {
    //Declaration :: Variable.
    var $win, $banner, $bannerWrap, $bannerContainer, $bannerItem, $bannerItemImg, $bannerItemImgEl,
        $dotNav, $dotNavEl,
        $paddleNav, $paddleNavEl, $paddleNavPrevEl, $paddleNavNextEl;

    var _cuId, _exId, _itemMax, _bannerW, _bannerH, _isResize, _isAni;

    //Declaration :: Const Variable.
    var _duration = 500;

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

        _bannerW = $banner.width();
        _bannerH = $banner.height();

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
        $bannerWrap.width(_bannerW);
        $bannerContainer.width(_bannerW * _itemMax);
        $bannerItem.width(_bannerW);
        bannerSlide(true);
        _isResize = false;
    }

    //Func :: Event Handler - Dot Nav Click.
    var onClickDotNav = function(e) {
        e.preventDefault();
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
            $bannerContainer.stop(true).animate({'left' : _bannerW * _cuId * -1}, _duration, function() {
                dotNavCheck();
                paddleNavCheck();
                _exId = _cuId;
                _isAni = false;
            });
        } else {
            $bannerContainer.css({'left' : _bannerW * _cuId * -1});
            _isAni = false;
        }
    }
    
    //Call.
    init();
});
})(jQuery);