    console.log('init');

    //즉시 실행 함수.
    (function($){
        //DOM(문서) 전체가 로드 완료된 후. 
        $(document).ready(function(){
            console.log('$ ready');
            /*
            //selector - tag
            var $h1 = $('h1');
            var h1 = document.getElementsByTagName('h1');
            console.log('1',$h1, h1);

            var $div = $('div');
            var div = document.getElementsByTagName('div');
            console.log('2', $div, div);

            //selector - class
            var $content = $('.content');
            var contents = document.getElementsByClassName('content');
            console.log('3', $content, contents);
            
            //selector - id
            var $hello = $('#hello');
            var hello = document.getElementById('hello');
            console.log('4', $hello, hello);

            //selector - tag + id, tag + class, query
            var $divHello = $('div#hello');
            var $divContent = $('div.content');
            var $spanContent = $('span.content');
            console.log('5', $divHello, $content, $divContent, $spanContent)

            var $footer = $('#footer');
            console.log('6',$footer);

            //selector - tag + attribute
            //$('tag[attr=val]')
            var $link = $('a');
            var $linkExternal = $('a[href="http://www.naver.com"]');
            var $linkHash = $('a[href="#"]');
            

            console.log('7', $link, $linkExternal, $linkHash);
            
            //first
            //last
            //eq
            console.log($div);
            console.log($div.first());
            console.log($div[0]);
            console.log($div.get(0));   
            console.log($div.eq(0)); // 배열
            console.log($div.last());
            */
            //개수 .length
            var $list = $('ul#list');
            var $listItem = $list.find('li')
            console.log($listItem);
            console.log($listItem.length);

            // 클래스 추가 /제거
            // addClass('.클래스명');
            // removeClass('.클래스명');

            var $list = $('ul#list');
            var $listItem = $list.find('li');

            $listItem.addClass('red');
            $listItem.eq(1).removeClass('blueColor');
            $listItem.first().addClass('black whiteColor');
            $listItem.last().removeClass('red');
            
            //has
            //not
            var $hasSpanLink = $('a:has(span)');
            $hasSpanLink = $('a').has('span');
            console.log($hasSpanLink);
            var $notLink = $('a:not(.link)');
            $notLink = $('a').not('.link');
            console.log($notLink);

            //visible
            var $divVisible = $('div:visible');
            console.log($divVisible)
            var $divHidden =$('div:hidden');
            console.log($divHidden);
        });
    })(jQuery);