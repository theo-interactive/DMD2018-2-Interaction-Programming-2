//$ jQuery - Manipulation.
//DOM Removal.
$(this).detach();
$('p').detach();

$(this).empty();
$('p').empty();

$(this).remove();
$('p').remove();
$('p').remove(':contains("Hello")');

$(this).unwrap();