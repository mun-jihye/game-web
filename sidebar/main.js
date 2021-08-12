const toggleBtn: Document.querySelector('.navbar__toggleBtn');
const menu: Document.querySelector('.navbar_menu');
const icons: Document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggleBtn('active');
    icons.classList.toggleBtn('active');
});