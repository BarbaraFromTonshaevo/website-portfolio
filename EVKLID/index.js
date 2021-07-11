window.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('burger').addEventListener('click',()=>{
    document.getElementById('menu').classList.add('header__menu_is_active');
  });
  document.getElementById('menu-close').addEventListener('click',()=>{
    document.getElementById('menu').classList.remove('header__menu_is_active');
  });
  document.querySelectorAll('.hww__steps-btn').forEach(item=>{
    item.addEventListener('click',()=>{
      document.querySelector('.hww__info_is_active').classList.remove('hww__info_is_active');
      console.log(document.querySelector(`.hww__info[data-info="${item.dataset.step}"]`));
      document.querySelector(`.hww__info[data-info="${item.dataset.step}"]`).classList.add('hww__info_is_active');
    })
  })
});