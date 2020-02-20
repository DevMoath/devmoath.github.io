window.$      = require("jquery");
window.moment = require("moment");
require("bootstrap/dist/css/bootstrap.min.css");
require("@fortawesome/fontawesome-free/js/all");
require("./custom.css");
window.onload = e => {
    document.querySelector("#year").innerText      = moment().format("YYYY");
    document.querySelector("#full_time").innerText = document.querySelector("#current_time").innerText = moment("20191006", "YYYYMMDD").fromNow(true);
    document.addEventListener("gesturestart", e => e.preventDefault());
};
