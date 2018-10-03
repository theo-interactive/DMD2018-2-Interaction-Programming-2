//$ jQuery - Manipulation.
//DOM Insertion, Around.
$(this).wrap();
$(this).unwrap();

$('p').wrap('<div></div>');
$('p').unwrap();

var $p = $('p');
$('button').click(function(){
    if($p.parent().is('div')){
        $p.unwrap();
    }else{
        $p.wrap('<div></div>');
    }
});

$('p' ).wrapAll('<div></div>');
$('span').wrapAll('<div><div><p><em><b></b></em></p></div></div>');
$('p').wrapAll(document.createElement('div'));
$('p').wrapAll($('.p-container'));

$('.item').wrapInner('<span class="title">Title</span>');

$('.inner').wrapInner(function(){
    return '<div class="' + this.nodeValue + '"></div>';
});