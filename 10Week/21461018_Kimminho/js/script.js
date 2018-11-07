(function($){
    $(document).ready(function(){
        //Selector.
        var $el, $btnPlay, $btnReverse, $btnStop, $btnReset;

        //Setting.
        var _col = 4, _row = 4, _max = 16,
            _imgW = 256, _imgH = 256, _itemW = _imgW / _col, _itemH = _imgH / _row;
        //column - 열 4개.
        //row - 행 4줄.
        //max - 전체 프레임 : 16장.
        //imgW - 원본 이미지의 전체 사이즈 (width)
        //imgH - 원본 이미지의 전체 사이즈 (height)
        //itemW - 보이는 화면의 사이즈 (width) - 이미지 전체 사이즈 / 열.
        //itemH - 보이는 화면의 사이즈 (height) - 이미지 전체 사이즈 / 행.

        var _id = 0, _timer = 0, _isReverse = false;

        //Layout.
        var layout = function() {
            $el = $('.fighting');
            $btnPlay = $('.btn-play');
            $btnReverse = $('.btn-reverse');
            $btnStop = $('.btn-stop');
            $btnReset = $('.btn-reset');
        }
        //Event bind.
        var addEvent = function() {
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
        //Func :: Event Handler.
        var onClickPlay = function(e) {
            e.preventDefault();
            //애니메이션 실행.
            stopFrame();
            _isReverse = false; //정방향.
            playFrame();
        }
        var onClickReverse = function(e) {
            e.preventDefault();
            stopFrame();
            _isReverse = true; //역방향.
            playFrame();
        }
        var onClickStop = function(e) {
            e.preventDefault();
            stopFrame();
        }
        var onClickReset = function(e) {
            e.preventDefault();
            stopFrame();
            _id = 0;
            updateFrame();
        }

        //Func.
        var playFrame = function() {
            _timer = setInterval(progressFrame, 60);
        }
        var stopFrame = function() {
            clearInterval(_timer);
        }
        var progressFrame = function() {
            if (!_isReverse) { //정방향.
                _id++;
                // 정방향일 때, 0....47 으로 증가.
                // 47보다 큰 프레임이 존재하지 않기 때문에 애니메이션 정지.
                if (_id >= _max - 1) stopFrame();
            } else { //역방향.
                _id--;
                // 역방향일 때, 47....0 으로 감소.
                // 0보다 작은 프레임이 존재하지 않기 때문에 애니메이션 정지.
                if (_id <= 0) stopFrame();
            }
            updateFrame();
        }
        var updateFrame = function() {
            var posX = _id % _row * _itemW * -1;
            var posY = Math.floor(_id/ _col) * _itemH * -1;
            $el.css({'background-position' : posX +'px ' + posY + 'px'});
            console.log(_id, posX,posY);
            

            //좌표값 변경.
        }

        init();
    });
})(jQuery);




//posX = _this._cuId % _this._row * _this._itemW * -1;
//posY = Math.floor(_this._cuId / _this._col) * _this._itemH * -1;