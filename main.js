const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000, 
        disableOnInteraction: false, // 基础自动播放不中断
    },
    loop: true,

});

const sw = document.querySelector('.swiper');
sw.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});
sw.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
}); 

