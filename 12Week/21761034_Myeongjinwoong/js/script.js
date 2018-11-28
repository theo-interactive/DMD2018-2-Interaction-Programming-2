
// 
var $appendElWrap = $('.appendEl');
var $appendEl = $('.appendEl').first();
var $htmlTag = "<ul class='appendEl'></ul>";
var $wrapCap = " ";
var $caption = " ";

// ajax
function ajaxParsing(){
    fetch('./js/caption.json').then(function(response){
        response.text().then(function(text){
            var items = JSON.parse(text);
            var tags = " ";
            var $imgTag = " ";
            // console.log(items);
            
            for(var i = 0; i < items.captions.length; i++){
                var item = items.captions[i];
                // console.log(item);
                // console.log(typeof item.imgalign);

                if(item.imgalign == "left"){
                $imgTag = "<li><img class='imgSize' src='"+item.imgname+"' alt='jpg img'></li><li><div class='caption'><div class='wrapCap'><div class='titles'><span class='textadd'>TITLE</span><br/>"+item.title+"</div><div class='titles'><span class='textadd'>Artist</span><br/>"+item.artist+"</div><div><span class='textadd titles'>Release Date</span><br />"+item.relesedate+"</div><div><span class='textadd titles'>Play Time</span><br />"+item.playtime+"</div></div></div></li><div class='clear'></div>";
                }else if(item.imgalign == "right"){
                $imgTag = "<li><div class='caption'><div class='wrapCap'><div class='titles'><span class='textadd'>TITLE</span><br/>"+item.title+"</div><div class='titles'><span class='textadd'>DESIGN</span><br/>"+item.artist+"</div><div><span class='textadd titles'>Caption</span><br />"+item.relesedate+"</div><div><span class='textadd titles'>Play Time</span><br />"+item.playtime+"</div></div></div></li><li><img class='imgSize' src='"+item.imgname+"' alt='jpg img'></li><div class='clear'></div>";}

                tags = tags + $imgTag;
                $($appendElWrap).html(tags);
            }

            // 이미지가 로드되면 실행. $(...).load -> $(...).on('load',fucntion())
            var $img = $('.imgSize');
            $img.on('load',function(){    
                $wrapCap = $('.wrapCap');
                $caption = $('.caption');
                // console.log($caption)
                $caption.css('height', $img.height());
                // console.log($('.imgSize').height())
                $.each($wrapCap, function (i, value) {
                $(value).css('margin-top', ($caption.height() - $(value).height()) / 2);
                })                
            });
          })
        })
    }

// infinity scrolling
    $(window).scroll(function() {             
        if ($(window).scrollTop() == $(document).innerHeight() - $(window).innerHeight()) {
            $("#posterwrap").append($htmlTag);
            $(".appendEl").last().append($appendEl.children().clone());
          console.log('end');
        }
    });

// img height change
$(window).resize(ajaxParsing);
// ready : 이미지 로드 전까지 DOM 로드 된 상태.
$(document).ready(ajaxParsing);


