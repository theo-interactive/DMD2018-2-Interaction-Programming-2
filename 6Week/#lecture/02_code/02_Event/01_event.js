//$ jQuery - Event.


.bind()

//Event가 발생하면 실행될 함수를 지정한다.(이미 생성된 DOM 기준)
.bind(eventType [, eventData], handler)
.bind(eventType [, eventData] [, preventBubble])
.bind(events)

$('#menu-1').bind('click', function(){
});
$('#menu-1').bind('mouseenter mouseleave', function(){
});


.unbind()

//bind()를 해제한다.
.unbind(eventType [, handler])
.unbind(eventType, false)
.unbind(event)
.unbind()

$('#menu-1').unbind();
$('#menu-1').unbind('click');
$('#menu-1').unbind('click', handler);


.delegate()

//동적으로 생성된 DOM 객체들의 이벤트를 연결한다. (이벤트 버블 방지)
.delegate(selector, eventType, handler)
.delegate(selector, eventType, eventData, handler)
.delegate(selector, events)

$('body').delegate('a', 'click', function(){
});


.undelegate()

//delegate()를 제거한다.
.undelegate()
.undelegate(selector, eventType)
.undelegate(selector, eventType, handler)
.undelegate(selector, events)
.undelegate(namespace)

$('body').undelegate('a', 'click');

.on()

//동적으로 생성된 DOM 객체들의 이벤트를 연결한다. (1.7 이후 버전)
.on(events [, selector] [, data], handler)
.on(events [, selector] [, data])

$('a').on('click', function(){
});
$('body').on('click', 'a', function(){
});


.off()

//on()을 제거한다.
.off(events [, selector] [, handler])
.off(events [, selector])
.off(event)
.off()

$('a').off('click');
$('body').off('click', 'a');
$('body').off('click', 'a', handler);


.one()

//Event가 발생하면 실행될 함수를 지정한다. 하지만 딱 한번만 이벤트가 실행된다.
.one(events [, data], handler)
.one(events [, selector] [, data], handler)
.one(events [, selector] [, data])

$('#menu-1').one('click', function(){
});


.trigger()

//선택된 요소의 이벤트를 발생시킨다.
.trigger(eventType [, extraParameters])
.trigger(event [, extraParameters])

$('#menu-1').trigger('click');


.triggerHandler()

//.trigger()와 비슷하게 동작한다.
//예외사항
//form 전송은 동작하진 않는다.
//선택된 요소 중 첫번째 요소에만 동작한다.
//브라우저 기본동작, 버블링은 일어나지 않는다.
.triggerHandler(eventType [, extraParameters])
.triggerHandler(event [, extraParameters])

$('#menu-1').triggerHandler('focus');


.click()

//마우스 클릭시 이벤트를 발생시킨다.
.click(handler)
.click([eventData], handler)
.click()

$('#menu-1').click(function(){
});
$('#menu-1').on('click', function(){
});


.dblclick()

//마우스 더블클릭시 이벤트를 발생시킨다.
.dblclick(handler)
.dblclick([eventData], handler)
.dblclick()

$('#menu-1').dblclick(function(){
});
$('#menu-1').on('dblclick', function(){
});


.mousedown()

//마우스 버튼을 누른 순간 이벤트를 발생시킨다.
.mousedown(handler)
.mousedown([eventData], handler)
.mousedown()

$('#menu-1').mousedown(function(){
});
$('#menu-1').on('mousedown', function(){
});


.mouseup()

//마우스 버튼을 놓는 순간 이벤트를 발생시킨다.
.mouseup(handler)
.mouseup([eventData], handler)
.mouseup()

$('#menu-1').mouseup(function(){
});
$('#menu-1').on('mouseup', function(){
});


.mouseover()

//대상에 마우스 커서가 위치했을 때 이벤트를 발생시킨다.
.mouseover(handler)
.mouseover([eventData], handler)
.mouseover()

$('#menu-1').mouseover(function(){
});
$('#menu-1').on('mouseover', function(){
});


.mouseenter()

//대상에 마우스가 위치했을 때 이벤트를 발생시킨다.
.mouseenter(handler)
.mouseenter([eventData], handler)
.mouseenter()

$('#menu-1').mouseenter(function(){
});
$('#menu-1').on('mouseenter', function(){
});


.mousemove()

//대상에서 마우스 커서가 움직였을 때 이벤트를 발생시킨다.
.mousemove(handler)
.mousemove([eventData], handler)
.mousemove()

$('#menu-1').mousemove(function(){
});
$('#menu-1').on('mousemove', function(){
});


.mouseout()

//대상에서 마우스가 커서가 벗어 났을때 이벤트를 발생시킨다.
.mouseout(handler)
.mouseout([eventData], handler)
.mouseout()

$('#menu-1').mouseout(function(){
});
$('#menu-1').on('mouseout', function(){
});



.mouseleave()

//대상에서 마우스가 벗어났을 때 이벤트를 발생시킨다.
.mouseleave(handler)
.mouseleave([eventData], handler)
.mouseleave()

$('#menu-1').mouseleave(function(){
});
$('#menu-1').on('mouseleave', function(){
});


.hover()

//대상에 마우스가 요소에 오버되었을때 첫번째 함수가 실행되고, 마우스가 요소를 떠날때 두번째 함수가 실행된다.
.hover(handlerIn, handlerOut)

$('#menu-1').hover(function(){
});
$('#menu-1').on('mouseseenter mouseleave', function(){
});


.keypress()

//키 입력할 때 이벤트를 발생시킨다.(enter, tab 등의 특수키 제외)
.keypress(handler)
.keypress([eventData], handler)
.keypress()

$('input').keypress(function(){
});
$('input').on('keypress', function(){
});


.keydown()

//키 입력을 누르고 있을 때 이벤트를 발생시킨다. 모든 키에 대해 적용
.keydown(handler)
.keydown([eventData], handler)
.keydown()

$('input').keydown(function(){
});
$('input').on('keydown', function(){
});


.keyup()

//키 입력 후 이벤트를 발생시킨다.
.keyup(handler)
.keyup([eventData], handler)
.keyup()

$('input').keyup(function(){
});
$('input').on('keyup', function(){
});


.select()

//개체를 선택 했을 때 이벤트를 발생시킨다.
.select(handler)
.select([eventData], handler)
.select()

$('input').select(function(){
});
$('input').on('select', function(){
});


.change()

//input, textarea, select 객체의 요소값 변경할 때 이벤트를 발생시킨다.
.change(handler)
.change([eventData], handler)
.change()

$('input').change(function(){
});
$('input').on('change', function(){
});
 

.focus()

//해당 요소에 포커스를 받았을 때 이벤트를 발생시킨다.
.focus(handler)
.focus([eventData], handler)
.focus()

$('input').focus(function(){
});
$('input').on('focus', function(){
});


.focusin()

//focus() 의 업그레이드(1.4)
.focusin(handler)
.focusin([eventData], handler)
.focusin()

$('input').focusin(function(){
});
$('input').on('focusin', function(){
});


.blur()

//해당 요소에 포커스를 잃었을 때 이벤트를 발생시킨다.
.blur(handler)
.blur([eventData], handler)
.blur()

$('input').blur(function(){
});
$('input').on('blur', function(){
});


.focusout()

//blur()의 업그레이드(1.4)
.focusout(handler)
.focusout([eventData], handler)
.focusout()

$('input').focusout(function(){
});
$('input').on('focusout', function(){
});


.submit()

//폼 전송(submit)이 일어날 때 이벤트를 발생시킨다.
.submit(handler)
.submit([eventData], handler)
.submit()

$('input').submit(function(){
});
$('input').on('submit', function(){
});


.resize()

//브라우저 윈도우 창 크기가 변경되었을 때 이벤트를 발생시킨다.
.resize(handler)
.resize([eventData], handler)
.resize()

$(window).resize(function(){
});
$(window).on('resize', function(){
});

.scroll()

//DOM이 스크롤 되었을 때 이벤트를 발생시킨다.
.scroll(handler)
.scroll([eventData], handler)
.scroll()

$(window).scroll(function(){
});
$(window).on('scroll', function(){
});


.ready()

//DOM이 모두 준비 되었을 때 이벤트를 발생시킨다.
.ready(handler)

$(document).ready(function(){
});

.holdReady()

//DOM이 로드되는 것을 지연시켜준다.
jQuery.holdReady(hold)

$.holdReady(true);

...

$.holdReady(false);

event.target
//이벤트가 시작되는 DOM 요소.
$('#menu-1').on('click', function(event){
    $(event.target);
});

event.pageX
event.pageY

//문서의 왼쪽 가장자리를 기준으로 마우스 위치의 X좌표 값.
//문서의 왼쪽 가장자리를 기준으로 마우스 위치의 Y좌표 값.
$('#menu-1').on('mousedown', function(event){
    event.pageX;
    event.pageY;
});

event.preventDefault();
event.stopPropagation();

//객체 요소가 가지는 기본 이벤트를 해제한다.
//이벤트의 버블링을 제거한다.
$('#menu-1').on('click', function(event){
    event.preventDefault();
    event.stopPropagation();
});