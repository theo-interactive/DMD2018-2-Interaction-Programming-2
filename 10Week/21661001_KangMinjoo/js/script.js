(function($){
    $(document).ready(function(){

        var $el, $btnPlay, $btnReverse, $btnStop,$btnReset;

        
        var _col = 7, _row = 7, _max = 48,
            _imgW = 1008, _imgH = 1008, _itemW = _imgW / _col, _itemH = _imgH / _row;

            
        //column : 열 7개
        //ro2 - 행 7줄
        //max = 전체 프레임 : 48장
        //imgW - 원본 이미지의 전체 사이즈(width) 
        //imgH - 원본 이미지의 전체 사이즈
        //itemW - 보이는 화면의 사이즈(Width) - 이미지 전체 사이즈(열)
        //itemH - 보이는 화면의 사이즈(height) - 이미지 전체 사이즈(행)


        
        var _id = 0, _timer = 0, _isReverse = false;
        //layout
        var layout = function(){
            $el = $('.Rock');
            $btnPlay = $('.btn-play');
            $btnReverse = $('.btn-reverse');
            $btnStop = $('.btn-stop');
            $btnReset = $('.btn-reset');
        }

        //Event Bind

        var addEvent = function(){
            $btnPlay.on('click.play', onClickPlay);
            $btnReverse.on('click.reverse', onClickReverse);
            $btnStop.on('click.stop', onClickStop);
            $btnReset.on('click.reset', onClickReset);
        }

        //Initialize.
        var init = function() {
            layout();
            addEvent();
        }

        //func :: Event Handler
        var onClickPlay = function(e){
            e.preventDefault();
            //애니메이션 실행
            stopFrame();
            _isReverse = false;//역방향
            playFrame();
        }

        var onClickReverse = function(e) {
            e.preventDefault();
            stopFrame();
            _isReverse = true;//정방향
            playFrame();
        }
        var onClickStop = function(e){
            e.preventDefault();
            stopFrame();
        }
        var onClickReset = function(e){
            e.preventDefault();
            stopFrame();
            _id = 0;
            updateFrame();
        }


        // func

        var playFrame = function() {
            _timer = setInterval(progressFrame, 60); 
            // progressFrame();
        }
        var stopFrame = function() {
            clearInterval(_timer);
        }
        var progressFrame = function(){

            if(!_isReverse){//정방향
                _id++;
                //정방향일때 0...47로 증가
                //47보다 큰 프레임이 존재하지 않기 때문에 애니메이션 정지
                if(_id >= _max -1) stopFrame();
            }else{//역방향
                _id--;
                //역방향일때 47...0으로 감소
                //0보다 작은 프레임이 존재하지 않기 때문에 애니메이션 정지
                if(_id <= 0)stopFrame();
            }
           updateFrame();
        }
        var updateFrame = function(){
            // console.log(_id);
            
            var posX = _id % _row * _itemW * -1;
            var posY = Math.floor(_id / _col) * _itemH * -1; //-1 옆에 곱하기를 안해서 망함1


            
            //x : 현재 프레임(_id) % 열(_row)
            //y : (내림.)현재 프레임(_id) / 행(_col)
            //0.2, 0.5 -> 0
            //1.5, 1.6 -> 1

            //  0 - (0,0), 1 - (1,0), 2 - (2, 0)....
             //  7 - (0,1), 8 - (1,1), 9 - (2, 1).....
             //  14 - (0,2), 8 - (1,2), 9 - (2, 2).....
              //  28 - (0,3), 8 - (1,3), 9 - (2, 3).....
            $el.css({'background-position' : posX + 'px ' + posY + 'px'}); 

        }
        init(); //마지막에 init 호출 안해줘서 망함2
    });
})(jQuery);