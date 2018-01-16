var currentPos, changePos, bobPos;
var prevPos = $( window ).scrollTop();
$( window ).scroll(function() {
    currentPos = $( window ).scrollTop();
    changePos = prevPos - currentPos;
    prevPos = currentPos;
    bobPos = parseFloat($("#bob").css("top")) + changePos/50;
    $("#bob").css("top", bobPos + "px");
});


$('nav a').click(function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
    var el = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(el).offset().top
    }, 800);
});

$('#bob-logo').click(function(event) {
    event.preventDefault();
    var el = "#header";
    $('html, body').animate({
        scrollTop: $(el).offset().top
    }, 800);
});