//$ jQuery - Manipulation.
//Class.
$(this).addClass();

$('p').addClass('active');
$('li').addClass(function(index){
    return 'item-' + index;
});


$(this).hasClass();
$('#menu-1').hasClass('active');
$('#menu-1').hasClass('active selected');

$(this).removeClass();
$('p').removeClass('active');
$('p').removeClass('active').addClass('selected');

$('li:last').removeClass(function(){
    return $(this).prev().attr('class');
});

$(this).toggleClass();


$('#menu-1').toggleClass(className, addOrRemove);

if(addOrRemove){
    $('#menu-1').addClass(className);
}else{
    $('#menu-1').removeClass(className);
}

$('#menu-1').toggleClass(function(){
    if($(this).parent().is('.bar')){
        return 'happy';
    }else{
        return 'sad';
    }
});