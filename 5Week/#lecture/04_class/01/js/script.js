(function($){
    $(document).ready(function(){
        console.log('ready');
        //addClass();
        //클래스를 추가.
        // $('a').addClass('active');
        // $('li.selected a').addClass('active');
        // $('li.selected').children('a').addClass('active');
        // $('li.selected').find('span').addClass('blue');
        //removeClass();
        //클래스를 제거.
        // $('li.item').eq(3).children('a').removeClass('active');
        //$('li.item').eq(3).children('a') -> 셀렉터.
        //removeClass('active'); -> removeClass 메서드.
        //hasClass();
        //클래스 여부를 체크. -> Boolean (true, false)
        //console.log($('li.item').eq(3).children('a').hasClass('active')); //false.
        var $btnToggle = $('button#btn-toggle');
        var $item3Link = $('li.item').eq(3).children('a');
        // console.log($btnToggle);
        /*
        $btnToggle.click(function(e){
            e.preventDefault();
            // console.log('click');
            if($item3Link.hasClass('active')){
                //true, active 클래스가 있을 때. removeClass();
                console.log('on');
                $item3Link.removeClass('active');
            }else{
                //false, active 클래스가 없을 때. addClass();
                console.log('off');
                $item3Link.addClass('active');
            }
        });
        */
       
        $btnToggle.click(function(e){
            e.preventDefault();
            //toggleClass();
            //클래스 여부에 따라서 추가 / 제거.
            $item3Link.toggleClass('active');
        });
        //addClass(), removeClass(); 다중 클래스를 넣을 때. ' ' 띄어쓰기로 구분.
        // $('li').addClass('selected active blue');
        // $('li').removeClass('selected active blue');

        //wrap();
        // $('p').wrap('<section></section>');
        // $('p').wrap('<article class="article"><section class="section"></section></article>');
        //unwarp();
        // $('p').unwrap();

        //wrapAll();
        //$('p').wrapAll('<article class="article"><section class="section"><div><div><div></div></div></div></section></article>');
        // console.log($('.article'));
        /*
        <article class="article">
            <section class="section">
                <div>
                <div>
            </section>
        </article>
        */
        // $('p').wrapAll($('.article'))

        //wrapInner();
        // $('p').wrapInner('<span class="active">Title </span>');

        //*** append();
        //*** prepend();
        //*** html();
        // $('p').append('<span class="title">Title</span><span class="desc">Description</span>')
        $('#gn ul').append('<li class="item"><a href="#"><span>Menu append</span></a></li>');
        $('<li class="item"><a href="#"><span>Menu append</span></a></li>').appendTo('#gn ul');
        $('#gn ul').prepend('<li class="item"><a href="#"><span>Menu prepend</span></a></li>');
        $('<li class="item"><a href="#"><span>Menu prepend</span></a></li>').prependTo('#gn ul');
        $('#gn ul').prepend('<li class="item"><a href="#"><span>Menu prepend 2</span></a></li>');
        $('#gn ul').append('<li class="item"><a href="#"><span>Menu append 2</span></a></li>');
        //appendTo, prependTo - 기준이 바뀌는...

        var max = 20;
        var html = '';
        for(var i = 0; i < max; i++){
            var order = parseInt(i + 1, 10);
            html += '<li class="item"><a href="#menu' + order + '"><span>Menu ' + order + '</span></a></li>'
        }
        // console.log(html);
        // $('#gn ul').html('<li class="item"><a href="#"><span>Menu html</span></a></li>');
        $('#gn ul').html(html);

        //empty();
        //요소 안의 문자열을 비움.
        // $('#gn ul').empty();
        // $('#gn ul').html('');

        //text();
        // console.log($('#gn ul li').eq(4).html());
        // console.log($('#gn ul li').eq(4).text());
        // console.log($('#gn ul li').eq(4).find('span').text());

        //after(), before();
        $('li').first().after('<li class="item">menu after</li>');
        $('li').last().before('<li class="item">menu before</li>');

        //detach();
        $('li').last().detach();
        $('li').last().remove();

    });
})(jQuery);