# 6 WEEK

6주차 과제입니다.

## jQuery Events (이벤트)

1. '#quest' 폴더 다운받습니다.
2. '학번_이름' 폴더를 '6Week' 폴더에 생성합니다.
3. '학번_이름' 폴더에 다운받은 '#quest' 전체 내용을 복사하고 index.html 파일에 작성하여 업로드합니다.

### Quest 1.

- .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.

### Quest 2.

- .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.

### Quest 3.

- .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.

### Quest 4.

- .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.

### Quest 5.

- .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.

### Quest 6.

- .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.

### Quest 7.

- .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.

### Quest 8.

- .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.

### Quest 9. (9번부터 조금씩 어렵습니다.)

- 0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
- slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
- 힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산

### Quest 10.

- slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
- 힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산

### Quest 11.

- .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.

### Quest 12.

- dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span 에 ‘selected’ 클래스를 추가합니다.
- 클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
- slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.

### Quest 13.

- paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
1. _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
2. _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
3. _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
- DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.


## 제출기한

10월 10일 (수) 23:00 까지 업로드

<hr/>

## 인터랙션 사이트 기획서

인터랙션 사이트 기획서 작성합니다.

### 기획서 항목

- 프로젝트 명칭
- 주제 선정
- 자료 수집
- 톤앤매너, 컨셉 설정
- 사이트맵 구조
- 동작에 따른 기능 명세서
- 톤앤매너, 컨셉에 따른 모션, 인터랙션 리서치 (사이트, 영상 등)
- Javascript 코드 리서치 (codepen.io, github, google 검색하여 활용)

### 주제 (택 1 하여 진행)

- (1) 롤모델, 유명인사
- (2) 셀프 브랜딩, 브랜드 리브랜딩, 제품 프로모션
- (3) 이외의 진행하고자 하는 자유 주제

## 제출형식

학번_이름_프로젝트 명칭.ppt/pdf

ex) 20180000_김용원_프로젝트 명칭.ppt/pdf

## 제출방법

카페 게시글에 답글로 제출합니다.

## 제출기한

10월 10일 (수) 23:00 까지 업로드