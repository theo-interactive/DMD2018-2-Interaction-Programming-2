
(function($){
$(document).ready(function() {
// console.log("load");

    var musicAjax = function() {
        $.ajax({
            url : '/data/music.json',
            dataType : 'json',

            success : function(d) {

                // 여기서 왜 undefined가 뜨는지 모르겠습니다....ㅠㅠㅠ
                console.log(d);

                var items = d, html = '', $list = $('#favorite-album');

                $.each(items, function(i, d) {
                    var title = d["title"], 
                        cover =d["cover"], 
                        artist =d["artist"], 
                        style =d["style"], 
                        date =d["date"]; 
                        
                    console.log(title, cover, artist, style, date);

                    html +='< li class="album">'
                    html += '<div class="cover_wrap">' +'<img src="' + cover + '" alt="' + title + '"></div>';
                    html += '<div class="info_wrap">'
                    html +=    '<p>'+ title +'</p>'
                    html +=    '<p>'+ artist +'</p>'
                    html +=    '<p>'+ style +'</p>'
                    html +=    '<p>'+ date +'</p>'
                    html += '</div>'
                    html += '</li>'
                 
                    if(i === items.length - 1) { //max
                        //html 이 완성됨.
                        $list.empty().html(html);
                        
                    }
                });
            }
        });
    };
    musicAjax();
    
});
})(jQuery);