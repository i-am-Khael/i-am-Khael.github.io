

const menuBTN = document.querySelector('i');
const navMobile = document.querySelector('nav.nav-mobile');

const openNavMobile = () => {
  menuBTN.classList.toggle('fa-xmark');
  menuBTN.classList.toggle('active');
  menuBTN.classList.toggle('fa-bars');
  navMobile.classList.toggle('active');
}

menuBTN.addEventListener('click', openNavMobile);

