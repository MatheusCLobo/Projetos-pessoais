const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton && nav){
  menuButton.addEventListener('click',()=>{
    const expanded=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!expanded));
    nav.classList.toggle('open',!expanded);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    menuButton.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
  }));
}
