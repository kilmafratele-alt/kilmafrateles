const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => list.classList.toggle('show'));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({top:y, behavior:'smooth'});
      if(list.classList.contains('show')) list.classList.remove('show');
    }
  });
});