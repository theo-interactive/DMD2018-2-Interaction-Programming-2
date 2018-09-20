// console.log('init');
(function($){
//DOM(문서) 전체가 로드 완료된 후.
$(document).ready(function(){
    // console.log('$ ready');

    //selector - 태그
    var $h1 = $('h1');
    var h1 = document.getElementsByTagName('h1');
    // console.log('1', $h1, h1);
    var $div = $('div');
    var div = document.getElementsByTagName('div');
    // console.log('2', $div, div);
    
    //selector - 클래스
    var $contents = $('.content');
    var contents = document.getElementsByClassName('content');
    console.log('3', $contents, contents);
    
    //selector - 아이디
    var $hello = $('#hello');
    var hello = document.getElementById('hello');
    console.log('4', $hello, hello);
    var $footer = $('#footer');
    //console.log('5', $footer);

    //selector - 태그 + 아이디, 태그 + 클래스, query
    var $divHello = $('div#hello');
    var $divContent = $('div.content');
    var $spanContent = $('span.content');
    // console.log('6', $divHello, $contents, $divContent, $spanContent);

    //selector - 태그 + 속성 필터링.
    var $link = $('a');
    var $linkExternal = $('a[href="http://www.naver.com"]');
    var $linkHash = $('a[href="#"]');
    // console.log('7', $link, $linkExternal, $linkHash);
});
})(jQuery);