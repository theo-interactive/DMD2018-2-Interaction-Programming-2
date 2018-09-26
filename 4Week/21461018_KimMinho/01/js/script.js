//console.log('init');
(function($){
    //DOM(문서) 전체가 모두 로드 완료된 후.
    $(document).ready(function(){
        //console.log('$ ready');
        var $h1 =$('h1');
        var h1 = document.getElementsByTagName('h1');
        //console.log('1', $h1, h1);
        // 이렇게 써도 됨
        //console.log('1', $('h1'));
        var $div = $('div');
        var div = document.getElementsByName('div');
        //console.log('2', $div, div);



        //selector - 클래스
        var $contents = $('.content');
        var contents = document.getElementsByClassName('content');
        //console.log('3', $contents, contents);
        


        //selector - 아이디
        var $hello = $('#hello');
        var hello = document.getElementById('hello');
        //console.log('4', $hello, hello);
        var $footer = $('#footer');
        //console.log('5', $footer);
        


        //selector - 태크 + 아이디, 태크 + 클래스, qurey
        var $divHello = $('div#hello');
        var $contents = $('.content');
        var $divContent = $('div.content');
        var $spanContent = $('span.content');
        //console.log('6',$divHello,$contents,$divContent,$spanContent);



        //selector - 태그 + 속성 필터링.
        //$('태그명[속성=값]');
        var $link = $('a');
        var $linkExternal = $('a[href="http://www.naver.com"]');
        //var $linkExternals = $('a[href^="http"]');
        var $linkHash = $('a[href="#"]');
        //console.log('7', $link, $linkExternal, $linkHash);
        
        //first
        //last
        //eq
        var $list = $('ul#list');
        var $listItem = $list.find('li');

        $listItem.addClass('redBG');
        $listItem.eq(1).removeClass('blueColor');
        $listItem.first().addClass('blackBG whiteColor');
        $listItem.last().removeClass('redBG');


        //클래스를 추가 / 제거.
        //addClass('.클래스명');
        //removeClass('.클래스명');


        //console.log($div);
        //선택자 배열 중 1번째.(0)
        //console.log($div.first());
        //console.log('1', $div[0]);
        //console.log('2', $div.get(0));
        //console.log('3', $div.eq(0));
        
        //4번째. 0, 1, 2, 3 - 3
        //console.log($div.eq(3));
        

        
        //선택자 배열 중 마지막 번째.
        //console.log($div.last());
 
        //console.log($list.first());
        
        
        //개수. - .length
        //console.log($listItem);
        //console.log($listItem.length);
        
        //has
        //not
        var $hasSpanLink = $('a:has(span)');
        $hasSpanLink =$('a').has('span');
        console.log($hasSpanLink);
        var $notLink = $('a:not(.link)');
        $notLink =$('a').has('.link');
        console.log($notLink);
        

        //visible /hidden
        var $divVisible = $('div:visible');
        console.log($divVisible);
        var $divHidden = $('div:hidden');
        console.log($divHidden);
        
        
    });
})(jQuery);