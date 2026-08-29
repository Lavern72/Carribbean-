// script.js — basic UI scripts for Caribbean Storytime Studios
// 1) fills the current year into elements with data-year
// 2) toggles mobile navigation
// 3) closes menu on outside click or ESC

(function(){
  function onReady(fn){
    if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function(){
    var yearEl = document.querySelector('[data-year]');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    function closeMenu(){
      if(!menu) return;
      menu.classList.remove('open');
      menu.style.display = '';
      if(toggle) toggle.setAttribute('aria-expanded','false');
    }

    function openMenu(){
      if(!menu) return;
      menu.classList.add('open');
      // force a column layout for small screens when opened
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      if(toggle) toggle.setAttribute('aria-expanded','true');
    }

    if(toggle && menu){
      toggle.addEventListener('click', function(e){
        e.stopPropagation();
        if(menu.classList.contains('open')) closeMenu(); else openMenu();
      });

      // close when clicking outside
      document.addEventListener('click', function(e){
        if(!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
      });

      // close on escape key
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') closeMenu();
      });
    }
  });
})();
