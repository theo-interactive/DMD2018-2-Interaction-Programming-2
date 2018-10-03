//$ jQuery - Manipulation.
//DOM Insertion, Outside.
$(this).after();
$('.item').after('<p>Hello</p>');
$('p').after(function(){
    return '<div>' + this.className + '</div>';
});

$('<p>Hello</p>').insertAfter('.item');
$('p').insertAfter('#menu-1');

$(this).before();
$('.item').before('<p>Hello</p>');

$('<p>Hello</p>').insertBefore('.item');
$('p').insertBefore('#menu-1');