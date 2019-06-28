// This function is to remove the loader tag after the page is loaded and enable the scroll
window.onload = function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';

    new Typed('.name', {
        strings: ["Moath Alhajri"],
        showCursor: false,
        typeSpeed: 100
    });

    new Typed('.major', {
        strings: ["Developer"],
        showCursor: false,
        typeSpeed: 130
    });
}