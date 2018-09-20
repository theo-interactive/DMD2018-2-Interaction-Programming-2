    (function($){
        $(document).ready(function(){
            //index--------------------------------------------
            var $contents = $('div.content');
            var $content = $('div#content');
            console.log('1', $contents); // 배열 변환
            console.log('2', $content);

            // 배열 중 n 번째. index(찾을 요소) > n 값 반환.
            console.log('3', $contents.index($content))

            //children-----------------------------------------
            var $ul = $('ul');
            var $listItem = $ul.children();
            /*
            // el > el {}
            console.log($ul.children());
            console.log($ul.children('.item'));
            console.log($content.children());
            console.log($content.children('#link'));
            console.log($content.children('.link'));

            // #content > ul > li {}
            console.log($content.children('ul').children());
            
           console.log($listItem.first());
           console.log($ul.children().first());
           console.log($listItem.eq(0));
           console.log($ul.children().eq(0));
           console.log($listItem.last());
           console.log($ul.children().last());
            */

           //parent
           //parents-----------------------------------------
           var $liLink = $('#li_link');
           //console.log($liLink.parent());
           var $link = $('a');
            //    console.log($link.parent()); // div(2), li, li
            //    console.log($link.parent('li')); // 2 li
           console.log($liLink.parents()); // 상위에 있는 모든 el
           console.log($liLink.parents('.content'));
           console.log($liLink.parents('ul'));

           //prev 이전 요소 찾기
           //prevAll 이전 모든 요소 찾기
           console.log($content.prev());
           console.log($content.prevAll());

           //next 다음 요소 찾기
           //next 다음 모든 요소 찾기
           console.log($content.next());
           console.log($content.nextAll());

           console.log($listItem.last().prevAll());
           console.log($listItem.eq(3).prevAll());
           console.log($listItem.first().nextAll());
           console.log($listItem.eq(3).nextAll());

           console.log($('#link').prev());
           console.log($('#header').next());
           console.log($('#header').nextAll());

           //find **!!-----------------------------------------
           //children과 비슷.
           //children > / find 하위에 있는 모든 요소
           console.log($content.find('a'));
           $content.find('ul').find('li').find('a').find('span').addClass('bg');
        });
    })(jQuery);