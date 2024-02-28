const botao = document.querySelector('.menu__botao');

botao.addEventListener('click', () => {
    const menuNav = document.querySelector('.menu');
    
    menuNav.classList.toggle('menu-active');
});