$('nav>a').click(function () {
    const ID = $(this).attr('href');
    const OFFSET = $(ID).offset().top;
    console.log(ID);
    $('html').animate({
        scrollTop: OFFSET
    }, 1500);
})
$('.to-page1').click(function () {
    const OFFSET = $('#page1').offset().top;
    $('html').animate({
        scrollTop: OFFSET
    }, 1500);
})
$('.to-page2').click(function () {
    const OFFSET = $('#page2').offset().top;
    $('html').animate({
        scrollTop: OFFSET
    }, 1500);
})
$('.to-page3').click(function () {
    const OFFSET = $('#page3').offset().top;
    $('html').animate({
        scrollTop: OFFSET
    }, 1500);
})
$('.to-page4').click(function () {
    const OFFSET = $('#page4').offset().top;
    $('html').animate({
        scrollTop: OFFSET
    }, 1500);
})

let lastScrollTop = 0;

$(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.cloud1').css('top', `${parseInt($('.cloud1').css('top'))-2}px`);
        $('.cloud2').css('left', `${parseInt($('.cloud2').css('left'))-2}px`);
        $('.cloud3').css('top', `${parseInt($('.cloud3').css('top'))+2}px`);
        $('.cloud4').css('top', `${parseInt($('.cloud4').css('top'))-2}px`);
        $('.cloud5').css('left', `${parseInt($('.cloud5').css('left'))-2}px`);
        $('.cloud6').css('top', `${parseInt($('.cloud6').css('top'))+2}px`);
        $('.cloud7').css('top', `${parseInt($('.cloud7').css('top'))-2}px`);
        $('.cloud8').css('left', `${parseInt($('.cloud8').css('left'))-2}px`);
        $('.cloud9').css('top', `${parseInt($('.cloud9').css('top'))+2}px`);
    } else {
        $('.cloud1').css('top', `${parseInt($('.cloud1').css('top'))+2}px`);
        $('.cloud2').css('left', `${parseInt($('.cloud2').css('left'))+2}px`);
        $('.cloud3').css('top', `${parseInt($('.cloud3').css('top'))-2}px`);
        $('.cloud4').css('top', `${parseInt($('.cloud4').css('top'))+2}px`);
        $('.cloud5').css('left', `${parseInt($('.cloud5').css('left'))+2}px`);
        $('.cloud6').css('top', `${parseInt($('.cloud6').css('top'))-2}px`);
        $('.cloud7').css('top', `${parseInt($('.cloud7').css('top'))+2}px`);
        $('.cloud8').css('left', `${parseInt($('.cloud8').css('left'))+2}px`);
        $('.cloud9').css('top', `${parseInt($('.cloud9').css('top'))-2}px`);
    }
    lastScrollTop = st;
});