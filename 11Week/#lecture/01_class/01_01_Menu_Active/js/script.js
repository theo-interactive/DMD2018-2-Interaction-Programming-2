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
        },
        resetInit : function() {
        },
        //Handler
        onScroll : function(e) {
            var _this = Menu, scrollTop = _this.$win.scrollTop();
            //console.log(scrollTop); //현재 스크롤 값.
            $.each(_this.$section, function(index, data){
                var $el = $(data),
                    elT = $el.offset().top,
                    startLimit = elT, endLimit = startLimit + $el.outerHeight();
                //섹션별 스크롤 좌표의 시작지점. ~ 종료지점.
                if(scrollTop >= startLimit && scrollTop < endLimit) {
                    console.log(index);
                }
            });
        }
    };
    Menu.init();
});
})(jQuery);