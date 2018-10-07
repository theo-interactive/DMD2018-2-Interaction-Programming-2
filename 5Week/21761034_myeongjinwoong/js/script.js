    (function($){
        $(document).ready(function(){
            console.log('ready');
        //addClass(); 클래스 추가
            //$('a').addClass('active');
            $('li.selected a').addClass('active');
            // $('li.selected').children('a').addClass('active');
            // $('li.selected').find('span').addClass('blue');
        
        //removeClass(); 클래스 제거
            $('li.item').eq(3).children('a').removeClass('active');  
            //$('li.item').eq(3).children('a') -> 셀렉터
            //removeClass('active'); -> removeClass 메서드
        
        //[addClass(); removeClass(); 다중 클래스 넣을 때. ' ' 띄어쓰기로 구분.]
        $('li').addClass('selectied active blue');
        $('li').removeClass('selectied active blue');

        //hasClass(); 클래스 여부 체크 -> Boolean (true, false)
            console.log($('li.item').eq(3).children('a').hasClass('active'))

        //click(); 클릭 이벤트 부여
            var $btnToggle = $('button#btn-toggle');
            var $item3Link = $('li.item').eq(3).children('a');
            /*
            console.log($btnToggle);
            $btnToggle.click(function(e){
                e.preventDefault(); // 이벤트 초기화
                console.log('click');
                if($item3Link.hasClass('active')){
                    //true, active 클래스가 있을 때 removeClass();
                    console.log('on');
                    $item3Link.removeClass('active');
                }else{
                    //false, active 클래스가 없을 때 addClass();
                    console.log('off');
                    $item3Link.addClass('active');
                }
            })
            */

        //toggleClass(); 토글 기능 부여
            $btnToggle.click(function(e){
                e.preventDefault();
                $item3Link.toggleClass('active');
            })
        
        //wrap();
            // $('p').wrap('<section></section>');
            // $('p').wrap('<article><section class="section"></section></article>');
        //unwrap();
            // $('p').eq(0).unwrap();
        
        //wrapAll();
            // $('p').wrap('<article class="aritcle"><section class="section"><div><div><div></div></div></div></section></article>');
            // $('p').wrapAll($('.article'));
        
        //wrapInner();
            // $('p').wrapInner('<span class="active">Title</span>');
        });

        //*append();* *prepend();*
            // $('p').append('<span class="Title">Title</span><span class="desc">Description</span>')
            $('#gn ul').append('<li class="item">Menu append</li>') // 뒤로 생성
            $('#gn ul').prepend('<li class="item">Menu prepend</li>') // 앞으로 생성
            $('#gn ul').prepend('<li class="item">Menu prepend2</li>') // 앞으로 생성
            $('#gn ul').append('<li class="item">Menu append2</li>') // 뒤로 생성
        
            $('<li class="item">Menu append3</li>').appendTo('#gn ul') // 뒤로 생성


        //*html();*
            $('#gn ul').html('<li class="item">Menu html</li>') // 뒤로 생성
            var max = 11;
            var html = '';
            for(var i = 0; i <= max; i++){
                var order = parseInt(i+1, 10);
                html += '<li class="item"><a href="#menu' + order + '"><span>Menu ' + order + '</span></a></li>'
            }
            // console.log(html);
            $('#gn ul').html(html);
            console.log($('#gn ul li').eq(4).html());

        //empty(); 요소 안의 문자열을 비움.
            // $('#gn ul').empty(); //$('#gn ul').html('');
        
        //text();
            console.log($('#gn ul li').eq(4).find('span').text());

        //after(), before();
            $('li').first().before('<li class="item">menu before</li>');
            $('li').last().after('<li class="item">menu after</li>');
        
        //detach();
            $('li').last().detach(); // $('li').remove().detach();
    })(jQuery);