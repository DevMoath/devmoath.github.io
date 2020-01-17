window.$ = require("jquery");
require("bootstrap/dist/css/bootstrap.min.css");
require("@fortawesome/fontawesome-free/js/all");
require("./custom.css");
window.onload = e => {
    document.querySelector("#year").innerText = new Date().getFullYear();
    $("a[href^='#']").on("click", function (e) {
        let target = $(this.getAttribute("href"));
        if (target.length) {
            e.preventDefault();
            $("html, body").stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    window.addEventListener("scroll", e => {
        let link = $("#link");
        if (window.scrollY < 30) {
            link.fadeIn();
        } else {
            link.fadeOut();
        }
    });
    document.addEventListener("gesturestart", e => e.preventDefault());
};