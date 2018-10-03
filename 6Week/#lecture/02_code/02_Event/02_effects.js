//$ jQuery - Effects - Animation.

.stop()

$('img').stop();
$('img').stop(true);
$('img').stop(true, true);

.animate()

$('img').animate({'left' : '100px'}, 1000);
$('img').animate({'left' : '100px'}, 1000, function(){
    //callback
});