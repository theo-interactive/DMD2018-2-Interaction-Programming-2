# 1 WEEK

1주차 과제입니다.

수업시간에 진행했던 Visual Studio Code 를 익혀보고, jQuery 로드했던 소스를 작성합니다.

'학번_이름' 폴더 생성 후 index.html, css, js 폴더 구조까지 만들어서 폴더 업로드합니다.

jQuery 로드(ready) 되는 함수 부분에 

(1) console.log() 에 자신의 '학번 / 이름' 을 출력하고,

(2) alert() 에 수업에 임하는 '간단한 인사말' 작성합니다.

(3) 또한, 수업을 통에서 배우고 싶거나 바라는 점들이 있다면 console.log() 에 추가적으로 기입해주세요.

## 제출기한

9월 5일 (수) 23:00 까지 업로드

## jQuery 로드

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/reset.css">
    <script src="./js/jquery.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> -->
    <title>1WEEK</title>
</head>
<body>
    <h1>1WEEK - 08/30</h1>
<script>
(function($){
    $(document).ready(function(){
        console.log('Hello World!');
        alert('안녕하세요.');
    });
})(jQuery);
</script>
</body>
</html>
```