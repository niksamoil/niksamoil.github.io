let open = document.querySelector('.hamburger__open'),
    close = document.querySelector('.hamburger__close'),
    nav = document.querySelector('.header-menu__nav');


open.addEventListener('click', ()=>{

    nav.classList.toggle('header-menu__nav_show');
    open.style.display = 'none';
    close.style.display = 'block';

});

close.addEventListener('click', ()=>{

    nav.classList.toggle('header-menu__nav_show')
    open.style.display = 'block';
    close.style.display = 'none';

});

