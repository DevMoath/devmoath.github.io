class UI {
    constructor() {
        this.page_loader = document.getElementById('page_loader');
        this.body_page = document.getElementById('body_page');
    }

    start_type(name, major) {
        new Typed('.name', {
            strings: [name],
            showCursor: true,
            typeSpeed: 100
        });
        new Typed('.major', {
            strings: [major],
            showCursor: true,
            typeSpeed: 80
        });
    }
}

window.onload = () => {
    const ui = new UI();
    ui.page_loader.classList.add('d-none');
    ui.body_page.classList.remove('overflow-hidden');
    let href = window.location.href;
    href.includes('ar') || href.includes('AR')
        ? ui.start_type('معاذ الهاجري', 'نظم معلومات')
        : ui.start_type('Moath Alhajri', 'Information Systems');

    window.addEventListener('scroll', () => {
        let link = document.querySelector('#link');
        let top = document.querySelector('#top');
        if (window.scrollY < 100) {
            link.classList.remove('link-hide');
            top.classList.remove('show');
        } else {
            link.classList.add('link-hide');
            top.classList.add('show');
        }
    });

    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
};