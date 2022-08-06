const header = () => {
    let header = document.querySelector(".js-header");
    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    })
}
header();

const menuToggle = () => {
    var humbger = document.querySelector(".nav__humbger");
    var menu = document.querySelector(".nav__list");

    humbger.addEventListener("click", () => {
        humbger.classList.toggle("active");
        menu.classList.toggle("active");
    })
}
menuToggle();