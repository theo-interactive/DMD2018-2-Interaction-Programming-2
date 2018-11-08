(function($){
    $(document).ready(function(){
        var $el = $('.minion');

        var _col = 7, _row = 7, _max = 48, 
        _imgW = 1008, _imgH = 1008;
        _itemW = _imgW / _col, _itemH = _imgH / _row;
        // column - 7개
        // row - 행 7개
        // max - 전체 프레임 : 48장 (48프레임)
        // imgW - 원본 이미지의 전체 사이즈 (width)
        // imgH - 원본 이미지의 전체 사이즈 (hight)
        //_itemW - 보이는 화면 사이즈 이미지전체 사이즈 /열
        //_itemH - 보이는 화면 사이즈 이미지전체 사이즈 /행


        var _Id = 0, _timer = 0, _isReverse = false;
        
        //Layout
        var layout = function() {
            $el = S('.minion');
            $btnPlay = $('.btn-play');
            $btnReverse = $('.btn-reverse');
            $btnStop = $('.btn-stop');
            $btnReset = $('btn-reset');
        }

        //Event bind
        var addEvent = function() {
            $btnPlay.on('Click.play', onClickPlay);
            $btnReverse.on('click.reverse', onClickReverse);
            $btnStop.on('click.stop', onClickStop);
            $btnReset.on('click.reset', onClickReset);
        }
        var init = function() {
            layout();
            addEvent();
        }
        var onClickPlay = function(e){
            e.preventDefault();
            //애니메이션실행
            stopFrame();
            _isReverse = false; //정방향
            playFrame();
        }
        var onClickReverse = function(e) {
            e.preventDefault();
            stopFrame();
            _isReverse = true; //역방향
            playFrame();
        }
        var onClickStop = function(e) {
            e.preventDefault();
        }
        var onClickReset = function(e) {
            e.preventDefault();
            stopFrame();
            _Id = 0;
            updateFrame();
        }
        var playFrame = function(){
            _timer = setInterval(progressFrame, 60);

        var stopFrame = function(){
            clearInterval(_timer);
        }
        var progressFrame = function(){
            
            if(!_isReverse){ //정방향
                _Id++;
                //정방향일때 0....47으로 증가
                //47보다 큰 프레임이 존재하지 않기 때문에 애니메이션 정지
                if(_Id === _max -1)stopFrame();

            }else{ //역방향
                _Id--;
                //역방향일때, 47....0으로 감소
                //0보다 작은 프레임이 존재하지 않기 때문에 애니메이션 정지
                if(_Id <= 0) 
                stopFrame();
            }
            updateFrame();
            
        }

        var updateFrame = function(){
            var 
            console.log(_Id);
        }


        init();
    });
})(jQuery);