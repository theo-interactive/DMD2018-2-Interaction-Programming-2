var melonUrl = "https://www.melon.com/album/detail.htm?albumId=";

function shuffleItems(o) {
    var i, r, s;
    for(i = o.length - 1; i > 0; i--){
        r = Math.floor(Math.random() * (i + 1));
        s = o[i];
        o[i] = o[r];
        o[r] = s;
    }
    return o;
}

function shuffle(max) {
    var o = [], i, r, s;
    for(i = 0; i < max; i++){
        o.push(i);
    }
    for(i = o.length - 1; i > 0; i--){
        r = Math.floor(Math.random() * (i + 1));
        s = o[i];
        o[i] = o[r];
        o[r] = s;
    }
    return o;
}

(function($){
$(document).ready(function() {

   

    $('button').on('click', function(e){
        e.preventDefault();
        musicAjax();
    });

    var musicAjax = function() {

        $.ajax({
            url: '/data/music.json',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                var items = response;
                var $list = $('#list');

                $list.empty();

                $.each(items, function(index, data){
                    var html = '';
                    // console.log(index, data);

                    var cover = data['cover'],
                        title = data['title'],
                        artist = data['artist'],
                        date = data['date'];
                        code = data['code'];
                    
                    //console.log(cover, title, artist, date);


                    html += '<li class="box">';
                    html +=     '<div class="cover"><a href="' + melonUrl + code + '" target="blank"><img src="' + cover + '"></a></div>';
                    html +=     '<div class="title">' + title + '</div>';
                    html +=     '<div class="artist">' + artist + '</div>';
                    html +=     '<div class="date">' + date + '</div>';
                    html += '</li>';

                   

                    

                    $list.append(html);
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    };
});
})(jQuery);