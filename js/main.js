  //FIXED HEADER
window.addEventListener('scroll', ()=> {
  let header = document.querySelector('header')
  header.classList.toggle('active', window.scrollY > 140)
})



//MOBILE HEADER

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'close menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'open menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

