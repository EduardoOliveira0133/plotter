function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "galeria/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "galeria/fmenu.svg";
    }
}