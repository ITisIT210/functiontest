$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1, //보여줄 이미지 갯수
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        navText: ["PREV", "NEXT"],
        // 반응형 추가
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            320: {
                items: 1,
                nav: true
            },
            640: {
                items: 1,
                nav: true
            },
            1024: {
                items: 1,
                nav: true
            }
        }
    });
});;