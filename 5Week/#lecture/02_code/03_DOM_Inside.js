//$ jQuery - Manipulation.
//DOM Insertion, Inside.
$(this).append();
.appendTo(this);

$('.item').append('<p>Hello</p>');
$('<p></p>').appendTo('.item');

$(this).prepend();
.prependTo(this);

$('.item').prepend('<p>Hello</p>');
$('<p></p>').prependTo('.item');

$(this).html();

$('.item').html('New contents');

$(this).text();

var pText = $('p:first').text();
$('p:last').html(pText);