const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

const menuItem = document.querySelector('.nav__item--menu');
const dropdownMenu = document.querySelector('.dropdown-menu');
const headerInner = document.querySelector('.header__inner');

const showMenu = () => {
    headerInner.classList.add('menu-visible');
};

const hideMenu = () => {
    headerInner.classList.remove('menu-visible');
};

menuItem.addEventListener('mouseenter', showMenu);

menuItem.addEventListener('mouseleave', (e) => {
    if (!dropdownMenu.contains(e.relatedTarget)) {
        hideMenu();
    }
});

dropdownMenu.addEventListener('mouseenter', showMenu);

dropdownMenu.addEventListener('mouseleave', hideMenu);

const burgerMenu = document.querySelectorAll('.burger-menu');
const headerInner2 = document.querySelector('.header__inner');
const htmlElement2 = document.documentElement;

burgerMenu.forEach((burgerMenu) => {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');

        const headerInner = burgerMenu.closest('.header__inner');

        if (headerInner) {
            headerInner.classList.toggle('menu-open');
        }

        document.documentElement.classList.toggle('lock');
    });
});

document.querySelectorAll('.nav__link--has-submenu').forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const parentItem = this.closest('.nav__item');

        if (parentItem.classList.contains('nav__item--open')) {
            parentItem.classList.remove('nav__item--open');
        } else {
            document.querySelectorAll('.nav__item--open').forEach((openItem) => {
                openItem.classList.remove('nav__item--open');
            });

            parentItem.classList.add('nav__item--open');
        }
    });
});
