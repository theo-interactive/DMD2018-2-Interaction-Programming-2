//$ jQuery - Manipulation.
//Copying.
$(this).clone();

$('.hello').clone().appendTo('.goodbye');
$('.goodbye').append($('.hello').clone());