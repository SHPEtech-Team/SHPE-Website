const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.right-side')

//display mobile header
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

