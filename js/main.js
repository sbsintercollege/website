var menu = document.getElementsByClassName('nav-menu');

function openMenu() {
  menu[0].classList.add('open')
  document.querySelector('html').style.overflow = "hidden";
}

function closeMenu() {
  menu[0].classList.remove('open')
  document.querySelector('html').style.overflow = "visible";
}
