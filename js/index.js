// This function is to remove the loader tag after the page is loaded and enable the scroll
window.onload = function() {
    document.getElementsByClassName("loader-container")[0].style.display = 'none';
    document.getElementById('page').style.overflowY = 'scroll';

    var typed = new Typed('.type', {
        strings: ["Moath Alhajri"],
        showCursor: false,
        typeSpeed: 100
    });

    var typed1 = new Typed('.type1', {
        strings: ["Bachelor in Information Systems"],
        showCursor: false,
        typeSpeed: 50
    });
}

function go_to_project_one() {
    window.location.href = "https://weather-app.cf/";
}

function go_to_project_two() {
    window.location.href = "https://github.com/DevMoath/Cryptography-Application";
}

function go_to_project_three() {
    window.location.href = "https://budget-app.cf/";
}