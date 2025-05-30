/* primary (image) carousel */
const mainOpts = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84,0,.08,.99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
};

/* secondary (text) carousel */
const textOpts = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84,0,.08,.99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
};

/* initialise Slick */
$('.image-slider').slick(mainOpts);
$('.text-slider').slick(textOpts);

/* optional GSAP flair: zoom-out on slide change */
$('.image-slider').on('beforeChange', (_, __, cur, next) => {
    gsap.fromTo(`.slick-slide[data-slick-index="${next}"]`,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
    );
});
