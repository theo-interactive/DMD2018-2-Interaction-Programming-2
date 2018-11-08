//jQuery Call.
(function($){
//Document Ready.
$(document).ready(function() {
    //Ready. - 전역변수가 하나만 존재.
    //Menu. - Object.
    //모듈화 UI 별 기능을 분리.
    //코드 정리가 용이, 오브젝트 리터럴 패턴.
    // { property : value, property : value, property : value }
    //********
    //this
    //********
    var Menu = {
        init : function() {
            //this === Menu
            this.layout();
            this.reset();
            this.addEvent();
            this.resetInit();
        },
        layout : function() {
            //Selector.
            //var $globalNav = $('#global-nav');
            this.$win = $(window);
            this.$winScroll = $('html, body');
            this.$wrap = $('#wrap');
            this.$gn = this.$wrap.find('#global-nav');
            this.$gnEl = this.$gn.find('a');
            this.$content = this.$wrap.find('.content');
            this.$section = this.$content.find('.section');
        },
        reset : function() {
            this._max = this.$section.length; // 6
        },
        addEvent : function() {
            //이벤트 핸들러에서의 this 는 이벤트가 바인딩 된 요소로 받아옴.
            this.$win.on('scroll', this.onScroll).trigger('scroll'); // this -> this.$win
            //this를 요소로 쓰지 않고 전역변수(Menu) 를 쓰고자 할 경우,
            //이벤트 핸들러에 .bind(this) 로 세팅. ... .bind(Menu)
            //this.$win.on('scroll', this.onScroll.bind(this)); // this -> Menu
            this.$gnEl.on('click', this.onClickGN);
        },
        resetInit : function() {
        },
        //Handler
        onClickGN : function(e) {
            e.preventDefault();
            var _this = Menu, $el = $(this),
                index = _this.$gnEl.index(this),
                id = $el.attr('href'),
                $cuSection, sectionT;
            //1. 네비게이션 개수와 섹션의 개수가 같을 때, index 로 찾을 수 있다.
            $cuSection = _this.$section.eq(index);
            //console.log($cuSection);
            //2. a 태그의 href 속성의 hash 태그를 이용하여, id 문자열로 찾을 수 있다.
            $cuSection = $(id);
            //console.log($cuSection);
            sectionT = $cuSection.offset().top;
            //console.log(sectionT);
            
            //Scroll Animation.
            //브라우저 마다 스크롤되는 window 의 요소가 다름.
            //_this.$winScroll.scrollTop(sectionT);
            //animate()
            //_this.$winScroll.stop(true).animate({scrollTop : sectionT}, 400);
            //가속도가 추가된 스크롤 애니메이션.
            _this.$winScroll.stop(true).animate({scrollTop : sectionT}, {duration : 500, easing : 'easeInOutQuad'});
        },
        onScroll : function(e) {
            var _this = Menu, scrollTop = _this.$win.scrollTop();
            //console.log(scrollTop); //현재 스크롤 값.
            $.each(_this.$section, function(index, data){
                var $el = $(data),
                    elT = $el.offset().top,
                    startLimit = elT, endLimit = startLimit + $el.outerHeight();
                //섹션별 스크롤 좌표의 시작지점. ~ 종료지점.
                if(scrollTop >= startLimit && scrollTop < endLimit) {
                    _this.$gnEl.removeClass('active');
                    _this.$gnEl.eq(index).addClass('active');
                }
            });
        }
    };
    Menu.init();
});
})(jQuery);