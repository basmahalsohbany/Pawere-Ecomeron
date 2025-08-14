'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});






/**
 * <!-- Lightbox -->
 */
document.addEventListener("DOMContentLoaded", function(){
  let currentIndex = 0;
  let images = [];

  const lightbox = document.getElementById('product-lightbox');
  const mainImg = document.getElementById('lightbox-main');
  const thumbs = document.querySelector('.lightbox-thumbs');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  document.querySelectorAll('.gallery-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      images = this.getAttribute('data-images').split(',').map(s => s.trim());
      currentIndex = 0;
      renderLightbox();
      lightbox.classList.add('open');
    });
  });

  function renderLightbox(){
    mainImg.src = images[currentIndex];
    thumbs.innerHTML = '';
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.addEventListener('click', () => {
        currentIndex = i;
        renderLightbox();
      });
      if (i === currentIndex) img.classList.add('active');
      thumbs.appendChild(img);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderLightbox();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderLightbox();
  });

  document.querySelector('.close-btn').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  document.querySelector('.overlay').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
});



// prodect dog | cat | bird | fish | 24h
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // إزالة active class من جميع الأزرار
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // إضافة active class للزر الذي تم الضغط عليه
      button.classList.add('active');

      const target = button.getAttribute('data-target');

      productItems.forEach(item => {
        if (target === 'all' || item.getAttribute('data-target') === target) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});


