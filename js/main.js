$('.slider_header').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
});
$(function() {
    $(".calc").each(function(c, b) {
        $(b).on("click", ".counter_elem", function() {
            var a = $(".counter_input", b)[0];
            $(".counter_elem", b).index(this) ? a.value-- : a.value++;
            0 > a.value && (a.value = 0)
        })
    })
});
$('.show_basket').click(function(){
    $('body').addClass('open')

});
$(document).mouseup(function (e){
    var div = $(".basket_popup");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
    $('body').removeClass('open')
    }
});

