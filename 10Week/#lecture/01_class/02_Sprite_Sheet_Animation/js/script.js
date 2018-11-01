(function($){
    $(document).ready(function(){
        //Selector.
        var $el, $btnPlay, $btnReverse, $btnStop, $btnReset;

        //Setting.
        var _col = 7, _row = 7, _max = 48,
            _imgW = 1008, _imgH = 1008, _itemW = _imgW / _col, _itemH = _imgH / _row;
        //column - 열 7개.
        //row - 행 7줄.
        //max - 전체 프레임 : 48장.
        //imgW - 원본 이미지의 전체 사이즈 (width)
        //imgH - 원본 이미지의 전체 사이즈 (height)
        //itemW - 보이는 화면의 사이즈 (width) - 이미지 전체 사이즈 / 열.
        //itemH - 보이는 화면의 사이즈 (height) - 이미지 전체 사이즈 / 행.

        var _id = 0, _timer = 0, _isReverse = false;

        //Layout.
        var layout = function() {
            $el = $('.minion');
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

        }
        var stopFrame = function() {

        }
        var progressFrame = function() {

        }
        var updateFrame = function() {

        }

        init();
    });
})(jQuery);




//posX = _this._cuId % _this._row * _this._itemW * -1;
//posY = Math.floor(_this._cuId / _this._col) * _this._itemH * -1;