const lady = document.querySelector(".lady-img");
lady.classList.add("lady-animation");

$(function () {
    AOS.init({
        duration: 2000,
        throttleDelay: 99,
        easing: "ease-in-out",

        delay: 500,
        offset: 120,
        debounceDelay: 50,
    });
});

$(window).on("resize", function () {
    AOS.refresh();
});
$(window).on("load", function () {
    AOS.refresh();
});

$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000
                );
                return false;
            }
        }
    });
});

//1075 helpline

//api key...
//9214ea5f18f09e405c8137a58f63d00c-us8

//list id
//5f4d68915dvv
// new hoverEffect({
//     parent: document.querySelector(".distortion"),
//     intensity: 0.2,
//     image1: "images/home-front.png",
//     image2: "images/person.jpg",
//     displacementImage: "images/heightMap.png"
// });