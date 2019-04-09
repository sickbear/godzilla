var width = document.body.clientWidth,
    height = document.body.clientHeight,
    bg = document.querySelector('.wrapper .container'),
    title = document.querySelector('.title-block'),
    subtitle = document.querySelector('.subtitle-block'),
    btn = document.querySelector('.btn-block'),
    menu = document.querySelector('.menu'),
    rect = btn.getBoundingClientRect();

TweenLite.start = width - 20;

TweenLite.fromTo(bg, 3, {
        opacity: 0
    }, {
        opacity: 1
    });

TweenLite.fromTo(title, 1, {
        left: TweenLite.start + 'px'
    }, {
        left: '0'
    });

TweenLite.fromTo(subtitle, 5, {
        opacity: 0
    }, {
        opacity: 1
    });

TweenLite.start = height - rect.top - 10;

TweenLite.fromTo(btn, 2, {
        top: TweenLite.start + 'px'
    }, {
        top: '0'
    });

TweenLite.fromTo(menu, 6, {
        opacity: 0
    }, {
        opacity: 1
    });