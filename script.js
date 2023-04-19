let burgerMenu = document.querySelector(".burger-menu");
let headerNav = document.querySelector(".header__nav");
let body = document.querySelector('body');

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('lock')
});
