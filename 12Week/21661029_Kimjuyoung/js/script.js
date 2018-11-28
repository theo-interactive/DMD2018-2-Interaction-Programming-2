(function($){
$(document).ready(function() {

    var albumAjax = function() {
        $.ajax({
            url : '/data/album.json',
            dataType : 'json',
            success : function(response) {
                var items = response['album'], html = '', $list = $('#favorite-songs');
                items = items.slice(0, 10);
                $.each(items, function(i, d) {
                    var title = d['songTitle'],
                        singer = d['singer']
                        poster = d['coverImageUrl'];
                    html += '<li class="song-item">';
                    html +=     '<div class="cover"><img src="' + poster + '" alt="' + title + '"></a></div>';
                    html +=     '<div class="name">' + singer  + ' - ' + title +'</a></div>';
                    html += '</li>';
                    if(i === items.length - 1) { //max
                        //html 이 완성됨.
                        $list.empty().html(html);
                        $list.parent().removeClass('inactive');
                    }
                });
            }
        });
    };

    albumAjax();

});
})(jQuery);