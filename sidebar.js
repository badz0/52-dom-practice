
const open = document.getElementById('open');
console.log('open: ', open);


const menu = document.querySelector('.menu');
const close = menu.querySelector('.menu-close');

open.addEventListener('click', () => {
  menu.classList.toggle('opened');
});

close.addEventListener('click', () => {
  menu.classList.remove('opened');
});


document.addEventListener('click', (event) => {
  if (event.target !== menu && menu.classList.contains('opened')) {
    menu.classList.remove('opened');
  }
})
