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
            typeSpeed: 130
        });
    }
}
window.onload = function() {
    const ui = new UI();
    ui.page_loader.classList.add('d-none');
    ui.body_page.classList.remove('overflow-hidden');
    let href = window.location.href;
    href.includes('ar') || href.includes('AR')
        ? ui.start_type('معاذ الهاجري', 'مطور ويب')
        : ui.start_type('Moath Alhajri', 'Web Developer');
};