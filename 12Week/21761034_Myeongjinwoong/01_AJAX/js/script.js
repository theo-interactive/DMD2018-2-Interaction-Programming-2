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
    $.ajax({ // object 방식으로 쉼표 구분.
        // type : "method" //데이터 전송 방식 get - 불러오기. || post - 입력하기.
        // url:"URL", // 데이터 경로. http://api.google.com/data.json
        // data:"data", // 데이터 속성 값. http://api.naver.com/?id=mj&name=myeong
        // dataType : "dataType", // 데이터의 형식 ex) json, xml, html, script
        // success : function(response){ // callback 함수. - 서버 통신이 성공했을 경우.
            // response - 성공했을 때 들어오는 데이터 - json일 경우 : object 형식 || xml일 경우 : tag형식
        // },
        // error : function(error){ // 서버 통신이 실패했을 경우.
            // error - 실패 했을 때 실패 이유 메세지.
        // }


    })
    $('button').on('click',function(e){
        e.preventDefault();
        if(this.id === 'btn-class-call'){
            classAjax();
        }else if(this.id === 'btn-itunes-call'){
            itunesAjax();
        }else if(this.id === 'btn-naver-call'){
            naverAjax();
        }

    })
    var classAjax = function(){
    $.ajax({
        url:"/data/class.json",
        dataType:"json",
        success:function(response){
            // console.log(response);
            // console.log(response['class'][1]);
            var items = response['class'];
            var $list = $('#class-list');
            // var html = '';
            // $.each(items, function(index, data){
            //     if(index === 0){
            //         html += '<li class="head">';
            //         html +=     '<div class="sort">구분</div>';
            //         html +=     '<div class="name">이름</div>';
            //         html +=     '<div class="id">아이디</div>'
            //         html += '</li>'
            //     }
            //     var number = data['number'], name = data['name'], id = data['id'], role= data['role'],url = gitURL + '/' + id;
            //     // console.log(number, name, id, role);
            //     html += '<li>';
            //     html +=     '<div class="sort">';
            //     // if(role === '학생'){
            //     //     html += '학번 : ';
            //     // }else{
            //     //     html += '교번 : ';
            //     // }
            //     html += (role === '학생') ? '학번 : ' : '교번 : '; // if문 축약형 - (조건) ? true : false ;
            //     html +=         '<i>'+ number +'</i>';
            //     html +=     '</div>';
            //     html +=     '<div class="name">'+ name +'</div>';
            //     html +=     '<div class="id"><a href="'+ url +'" target="_blank" title="'+ name +'">'+ id +'</a></div>';                
            //     html += '</li>';

            //     if(index === items.length - 1){
            //         console.log(html);
            //         $list.empty().html(html);
            //         $list.parent().removeClass('inactive');
            //     }
            // })
            $list.empty();
            $.each(items, function(index, data){
                var html = '';
                if(index === 0){
                    html += '<li class="head">';
                    html +=     '<div class="sort">구분</div>';
                    html +=     '<div class="name">이름</div>';
                    html +=     '<div class="id">아이디</div>'
                    html += '</li>'
                }
                var number = data['number'], name = data['name'], id = data['id'], role= data['role'],url = gitURL + '/' + id;
                // console.log(number, name, id, role);
                html += '<li>';
                html +=     '<div class="sort">';
                // if(role === '학생'){
                //     html += '학번 : ';
                // }else{
                //     html += '교번 : ';
                // }
                html += (role === '학생') ? '학번 : ' : '교번 : '; // if문 축약형 - (조건) ? true : false ;
                html +=         '<i>'+ number +'</i>';
                html +=     '</div>';
                html +=     '<div class="name">'+ name +'</div>';
                html +=     '<div class="id"><a href="'+ url +'" target="_blank" title="'+ name +'">'+ id +'</a></div>';                
                html += '</li>';
                // console.log(html)
                $list.append(html);
                if(index === items.length - 1){
                    $list.parent().removeClass('inactive');
                }
            })
        },
        error:function(error){
            console.log(error);
        }
        })
    }

    var itunesAjax = function(){
        $.ajax({
                url:"/data/itunes.json",
                dataType:"json",
                success : function(response){
                    console.log(response)
                    var items = response, html = '', $list = $('#itunes-movie');;
                    // items = items.slice(0,10);

                    items = shuffleItems(items);
                    $.each(items, function(i,d){
                        var title = d['title'], 
                            poster = trailersURL + d['poster_2x'],
                            url = trailersURL + d['location'];
                        html += '<li class="movie-item">';
                        html +=      '<div class="poster"><a href="' + url + '" target="_blank" title="' + title + '"><img src="' + poster + '" alt="' + title +'"></a></div>';
                        html +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + title+ '">'+ title +'</a></div>'
                        html += '</li>';
                        if(i === items.length -1){
                            // html이 완성됨.
                            $list.empty().html(html);
                            $list.parent().removeClass('inactive');
                        }
                    })
                },
                error : function(error){

                }
        });
    }

    var naverAjax = function(){
        $.ajax({
            url:"/data/naver.json",
            dataType:"json",
            success : function(response){

            },
            error : function(error){

            }
            // <div class="poster"><a href="#" target="_blank" title="name"><img src="" alt="name"></a></div>
            // <div class="name"><a href="#" target="_blank" title="name">name</a></div>
        })
    }
});
})(jQuery);