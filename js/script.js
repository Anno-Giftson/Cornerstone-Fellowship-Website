// small helper JS: nav toggle, year fill, and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // nav toggle for mobile
  const btn = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if(btn){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Smooth scroll for internal anchors (if any)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
