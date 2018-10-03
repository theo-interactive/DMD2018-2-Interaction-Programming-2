//$ jQuery - Manipulation.
//Style Properties.
$(this).css();

$(this).width();
$(this).innerWidth();
$(this).outerWidth();
$(this).outerWidth(true);
$(this).height();
$(this).innerHeight();
$(this).outerHeight();
$(this).outerHeight(true);

$(this).position();
$(this).offset();
$(this).scrollTop();
$(this).scrollLeft();

$(this).css('color', '#000');
$(this).css({'background-color' : '#000', 'colro' : '#fff'});
$(this).css('width', '+=200');

$(this).width();
$(this).width(100);

$(this).height();
$(this).height(100);

$(this).innerWidth();
$(this).innerWidth(100);

$(this).innerHeight();
$(this).innerHeight(100);

$(this).outerWidth();
$(this).outerWidth(200);
$(this).outerWidth(true);
$(this).outerWidth(300, true);

$(this).outerHeight();
$(this).outerHeight(200);
$(this).outerHeight(true);
$(this).outerHeight(300, true);

$(this).position();
$(this).position().top;
$(this).position().left;

$(this).offset();
$(this).offset().top;
$(this).offset().left;


$(this).scrollTop();
$(this).scrollTop(300);

$(this).scrollLeft();
$(this).scrollLeft(300);

$(window).scrollTop();
$(window).scrollLeft();