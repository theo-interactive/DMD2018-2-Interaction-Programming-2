//jQuery Call.
(function($){
//Document Ready.
$(document).ready(function() {
    // Ready = 전역변수 하나만 존재.
    
    // - 기존에 모든 변수 함수를 각각 지정해줬던 방식에서
    // var ...
    // var ...
    // var ...
    // function()...
    // function()...

    // Menu = Object. 모듈화 방식 사용
    // 모듈화 UI 별 기능을 분리.
    // 코드 정리가 용이, 오브젝트 리터럴 패턴.

    // ************매우중요*************
    // :: this
    // ************매우중요*************

    var Menu = {
        // 속성명 : 속성 값.
        init : function(){
        // this === Menu;
            this.layout();
            this.reset();
            this.addEvent();
            this.resetInit();

        },
        layout : function(){
        // Selector.
            // var $globalNav = $('#global-nav');
            this.$win = $(window);
            this.$winScroll = $('html, body');
            this.$wrap = $('#wrap');
            this.$gn = this.$wrap.find('#global-nav');
            this.$gnEl = this.$gn.find('a');
            this.$content = $('.content');
            this.$section = this.$content.find('.section');
            console.log(Menu);
        },
        reset : function(){
            // init에서 순차적으로 실행되기 때문에 $section을 찾을 수 있음.
            // init에서 reset이 layout보다 먼저 실행된다면 $section = undefind;
            this._max = this.$section.length;
        },
        addEvent : function(){
            // 이벤트 핸들러에서의 this는 이벤트가 바인딩 된 요소로 받아옴.
            this.$win.on('scroll', this.onScroll).trigger('scroll'); // this -> this.$win
            // this를 요소로 쓰지 않고, 전역변수(Menu)를 쓰고자 할 경우, 
            // 이벤트 핸들러에 .bind(this)로 세팅. ... .bind(Menu)
            // this.$win.on('scroll', this.onScroll.bind(this)); // this -> Menu
            this.$gnEl.on('click', this.onClickGn);
        },
        resetInit : function(){

        },
        onClickGn : function(e){
            e.preventDefault();
            var _this = Menu, $el = $(this), 
            index = _this.$gnEl.index(this),
            id = $el.attr('href'),
            $cuSection, sectionT;
            console.log(id);
            // 1. 네비게이션 개수와 섹션의 개수가 같을 때, id로 찾을 수 있다.
            $cuSection = _this.$section.eq(index);
            console.log($cuSection);
            // 2. a 태그의 href 속성의 hash 태그를 이용하여, id 문자열로 찾을 수 있다.
            $cuSection = $(id);
            console.log($cuSection);
            sectionT = $cuSection.offset().top;

            // scroll animation
            // 브라우저 마다 스크롤 되는 window의 요소가 다름.
            // $winScroll.scrollTop(sectionT);
            // animate();
            _this.$winScroll.stop(true).animate({scrollTop : sectionT},{duration : 400, easing : 'easeInCubic'});
        },
        // handler
        onScroll : function(e){
            // *******
            // ::this
            // *******

            var _this = Menu, scrollTop = _this.$win.scrollTop();
            // console.log(scrollTop); // 현재 스크롤 값.
            $.each(_this.$section, function(index,data){
                var $el = $(data),
                    elT = $el.offset().top,
                    // outerHeight > padding값 포함.
                    startLimit = elT, endLimit = startLimit + $el.outerHeight();

                    //섹션별 스크롤 좌표의 시작지점. ~ 종료지점.
                    if(scrollTop  >= startLimit && scrollTop < endLimit){
                        _this.$gnEl.removeClass('active');
                        _this.$gnEl.eq(index).addClass('active');
                    }

                // console.log(index,data);
            })
        }
    };
    Menu.init();
    // { property : value }
    
    // var Menu = {
    //     init : function() {
    //         this.layout();
    //         this.reset();
    //         this.addEvent();
    //     },
    //     layout : function() {
    //     },
    //     reset : function() {
    //     },
    //     addEvent : function() {
    //     },
    //     resetInit : function() {
    //     }
    // }
    // Menu.init();
});
})(jQuery);