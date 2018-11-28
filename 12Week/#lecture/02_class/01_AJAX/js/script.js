var gitURL = 'https://github.com';
var trailersURL = 'https://trailers.apple.com';
var naverURL = 'https://movie.naver.com';
var naverAssetURL = 'https://movie-phinf.pstatic.net';
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
        if(this.id === 'btn-class-call'){
            classAjax();
        }else if(this.id === 'btn-itunes-call'){
            itunesAjax();
        }else if(this.id === 'btn-naver-call'){
            naverAjax();
        }
    });
    var classAjax = function() {
        //$.ajax({
            //type: "method", //데이터 전송 방식 ex) GET - 불러오기, POST - 입력하기.
            //url: "url" //데이터의 경로. ex) http://api.google.com/data.json ***
            //data: "data", //데이터의 속성값. ex) http://api.naver.com/?id=id&name=name
            //data: {
            //    id: "id",
            //    name: "name"
            //},
            //dataType: "dataType", //데이터의 형식 ex) json, xml, html, script ***
            //success: function(response) { //callback 함수. - 서버통신이 성공했을 경우.
                //response - 성공했을 때 들어오는 데이터 - json일 경우 : Object 형식, xml일 경우 : 태그형식.
            //},
            //error: function(error) { //callback 함수. - 서버통신이 실패했을 경우.
                //error - 실패했을 때 실패의 이유 메세지.
            //}
        //});
        $.ajax({
            url: '/data/class.json',
            dataType: 'json',
            success: function(response) {
                // console.log(response);
                var items = response['class']; //배열 출력. 개수 - 19.
                //console.log(response['class'])
                //console.log(response['class'][2])
                var $list = $('#class-list');
                /*
                var html = '';
                $.each(items, function(index, data){
                    // console.log(index, data);
                    if(index === 0){
                        html += '<li class="head">';
                        html +=     '<div class="sort">구분</div>';
                        html +=     '<div class="name">이름</div>';
                        html +=     '<div class="id">아이디</div>';
                        html += '</li>';
                    }
                    var number = data['number'],
                        name = data['name'],
                        id = data['id'],
                        role = data['role'],
                        url = gitURL + '/' + id;
                    console.log(number, name, id, role, url);
                    html += '<li>';
                    html +=     '<div class="sort">';
                    // if(role === '학생') {
                    //     html +=     '학번 : ';
                    // }else{
                    //     html +=     '교번 : ';
                    // }
                    html += (role === '학생') ? '학번 : ' : '교번 : ';
                    //if 문 축약형 - (조건) ? true : false ;
                    html +=         '<i>' + number + '</i>';
                    html +=     '</div>';
                    html +=     '<div class="name">' + name + '</div>';
                    html +=     '<div class="id"><a href="' + url + '" target="_blank" title="' + name + ' git">' + id + '</a></div>';
                    html += '</li>';
                    if(index === items.length - 1){
                        $list.empty().html(html);
                        $list.parent().removeClass('inactive');
                    }
                });
                */
                
                $list.empty();
                $.each(items, function(index, data){
                    var html = '';
                    // console.log(index, data);
                    if(index === 0){
                        html += '<li class="head">';
                        html +=     '<div class="sort">구분</div>';
                        html +=     '<div class="name">이름</div>';
                        html +=     '<div class="id">아이디</div>';
                        html += '</li>';
                    }
                    var number = data['number'],
                        name = data['name'],
                        id = data['id'],
                        role = data['role'],
                        url = gitURL + '/' + id;
                    console.log(number, name, id, role, url);
                    html += '<li>';
                    html +=     '<div class="sort">';
                    // if(role === '학생') {
                    //     html +=     '학번 : ';
                    // }else{
                    //     html +=     '교번 : ';
                    // }
                    html += (role === '학생') ? '학번 : ' : '교번 : ';
                    //if 문 축약형 - (조건) ? true : false ;
                    html +=         '<i>' + number + '</i>';
                    html +=     '</div>';
                    html +=     '<div class="name">' + name + '</div>';
                    html +=     '<div class="id"><a href="' + url + '" target="_blank" title="' + name + ' git">' + id + '</a></div>';
                    html += '</li>';
                    console.log(html);
                    $list.append(html);
                    if(index === items.length - 1){
                        $list.parent().removeClass('inactive');
                    }
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    };
    var itunesAjax = function() {
        $.ajax({
            url : '/data/itunes.json',
            dataType : 'json',
            success : function(response) {
                //console.log(response);
                var items = response, html = '', $list = $('#itunes-movie');
                // items = shuffleItems(items);
                items = items.slice(0, 10);
                items = shuffleItems(items);
                $.each(items, function(i, d) {
                    var title = d['title'], //영화명.
                        poster = trailersURL + d['poster_2x'], //포스터 이미지. (2배)
                        url = trailersURL + d['location']; //경로.
                    console.log(title, poster, url);
                    html += '<li class="movie-item">';
                    html +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + title + '"><img src="' + poster + '" alt="' + title + '"></a></div>';
                    html +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + title + '">' + title +'</a></div>';
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
    // itunesAjax();
    var naverAjax = function() {
        $.ajax({
            url : '/data/naver.json',
            dataType : 'json',
            success : function(response) {
                var items = response['movieChartList']['CURRENT'], html = '', $list = $('#naver-movie');
                items = shuffleItems(items);
                $.each(items, function(i, d) {
                    var title = d['movieTitle'], //영화명.
                        poster = naverAssetURL + d['posterImageUrl'], //포스터 이미지. (2배)
                        //https://movie-phinf.pstatic.net/20181029_21/1540774701820gU85o_JPEG/movie_image.jpg
                        //naverAssetURl - https://movie-phinf.pstatic.net
                        //posterImageUrl -> /20181029_21/1540774701820gU85o_JPEG/movie_image.jpg
                        url = naverURL + '/movie/bi/mi/basic.nhn?code=' + d['movieCode']; //경로.
                        //https://movie.naver.com/movie/bi/mi/basic.nhn?code=154255
                        //naverURL - https://movie.naver.com
                        ///movie/bi/mi/basic.nhn?code=
                    html += '<li class="movie-item">';
                    html +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + title + '"><img src="' + poster + '" alt="' + title + '"></a></div>';
                    html +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + title + '">' + title +'</a></div>';
                    html += '</li>';
                    if(i === items.length - 1) {
                        $list.empty().html(html);
                        $list.parent().removeClass('inactive');
                    }
                });
            }
        });
    };
    // naverAjax();
});
})(jQuery);