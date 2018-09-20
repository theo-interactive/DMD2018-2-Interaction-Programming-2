(function($){
$(document).ready(function(){

    //index.
    var $contents = $('div.content');
    var $content = $('div#content');
    // console.log('1', $contents); //배열 반환.
    // console.log('2', $content);
    //배열 중 n 번째. index(찾을 요소) - n 값 반환.
    // console.log('3', $contents.index($content));

    //children.
    //el > el {}
    var $ul = $('ul');
    var $listItem = $ul.children();
    // console.log('1', $ul.children());
    // console.log('1', $ul.children('.item'));
    // console.log('2', $content.children('#link'));
    // console.log('2', $content.children('.link'));
    
    //#content > ul > li {}
    //console.log('3', $content.children('ul').children());

    // console.log($listItem.first());
    // console.log($ul.children().first());
    // console.log($listItem.eq(0));
    // console.log($ul.children().eq(0));
    // console.log($listItem.last());
    // console.log($ul.children().last());

    //parent
    //parents
    var $liLink = $('#li_link');
    // console.log($liLink.parent());
    var $link = $('a');
    // console.log($link.parent()); // div(2), li, li
    // console.log($link.parent('li')); // 2 li, li
    // console.log($liLink.parents()); // 상위 요소는 모두 찾음.
    // console.log($liLink.parents('ul'));
    // console.log($liLink.parents('.content'));

    //prev
    //앞에 있는 요소 찾기.
    //prevAll
    //앞에 있는 모든 요소 찾기.
    // console.log($content.prev());
    // console.log($content.prevAll());

    //next
    //뒤에 있는 요소 찾기.
    //nextAll
    //뒤에 있는 모든 요소 찾기.
    // console.log($content.next());
    // console.log($content.nextAll());

    // console.log($listItem.last().prevAll());
    // console.log($listItem.eq(3).prevAll());
    // console.log($listItem.first().nextAll());
    // console.log($listItem.eq(3).nextAll());

    // console.log($('#link').prev());
    // console.log($('#header').next()); // 1개만.
    // console.log($('#header').nextAll()); // 모든 요소.


    //find **!!
    //children 과 비슷.
    //children > / find 하위에 있는 요소들 전부. (계층에 영향받지 않음)
    console.log($content.find('a'));
    console.log($content.find('ul').find('li').find('a').find('span'));

    $content
    .find('ul li a span').addClass('bg');

    $content
    .find('ul').find('li').find('a').find('span')
    .addClass('bg');

    $content.find('a').find('span').addClass('bg');

    $content.find('a span').addClass('bg');

    $content.find('a').addClass('bg');
});
})(jQuery);