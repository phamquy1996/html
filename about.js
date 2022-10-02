$(document).ready(function () {
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: false,
        infinite: false,
        arrows: false,
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
})
var btnAvatar = function () {
    var $_btn = $('[data-role]');
    var $src = $('.testimonials__content__picture');
    $_btn.each(function (i) {
        var $_this = $(this);
        //var $_index = $_this.parent().index() + 1;
        var $src = $('.testimonials__content__picture');
        $_this.attr('style', 'background-image:url(' + $src.eq(i).attr('src') + ')');
    })
}
$(document).ready(function () {
    $('.testimonials').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
    });

    btnAvatar();
})
