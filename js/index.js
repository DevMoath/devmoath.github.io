class UI {
    constructor() {
        this.page_loader = document.getElementById('page_loader');
        this.body_page = document.getElementById('body_page');
        this.copy = document.getElementById('copy');
        this.email = document.getElementById('email');
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

    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });

    const ui = new UI();
    ui.page_loader.classList.add('d-none');
    ui.body_page.classList.remove('overflow-y-hidden');
    ui.start_type('Moath Alhajri', 'Information Systems');

    ui.copy.addEventListener('click', () => {

        ui.email.select();
        ui.email.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        swal.fire({
            type: 'success',
            title: 'Email Copied',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 5000
        });
    });

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
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
};