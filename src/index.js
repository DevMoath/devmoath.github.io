window.$      = require("jquery");
window.moment = require("moment");
require("bootstrap/dist/css/bootstrap.min.css");
require("@fortawesome/fontawesome-free/js/all");
require("./custom.css");
window.onload = e => {
    console.log("Test");
    document.querySelector("#year").innerText         = moment().format("YYYY");
    document.querySelector("#full_time").innerText    = moment("20191006", "YYYYMMDD").fromNow(true);
    document.querySelector("#current_time").innerText = moment("20200106", "YYYYMMDD").fromNow(true);
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
