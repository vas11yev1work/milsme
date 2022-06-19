import Flicking from '@egjs/flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';

import '@egjs/flicking/dist/flicking.min.css';
import './style/pagination.scss';
import './style/style.scss';
import './style/reset.scss';

const flicking = new Flicking('.first-screen__gallery', {
  circular: true,
  horizontal: false,
  align: 'prev'
});

flicking.addPlugins(new Pagination({
  type: 'bullet',
}));

flicking.addPlugins(new AutoPlay({
  stopOnHover: true
}));

const mobileFlicking = new Flicking('.first-screen__mobile-gallery', {
  circular: true,
  align: 'prev'
});

mobileFlicking.addPlugins(new Pagination({
  type: 'bullet',
}));

mobileFlicking.addPlugins(new AutoPlay({
  stopOnHover: true
}));

document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const header = document.querySelector('.header');
  const headerContent = document.querySelector('.header > .container');
  const headerButton = document.querySelector('.header__mobile-menu-button');

  products.forEach(product => {
    const openButton = product.querySelector('.product__open-button');
    const closeButton = product.querySelector('.product__close-button');
    if (openButton) openButton.addEventListener('click', () => {
      products.forEach(p => p.classList.remove('product--open'));
      product.classList.toggle('product--open');
    });
    if (closeButton) closeButton.addEventListener('click', () => {
      products.forEach(p => p.classList.remove('product--open'));
    })
  });

  if (headerButton) headerButton.addEventListener('click', () => {
    if (header) header.classList.toggle('header--open');
  });

  window.addEventListener('click', (event: MouseEvent) => {
    if (event && header && headerContent && !headerContent.contains(event.target as Node)) {
      header.classList.remove('header--open');
    }
  });
});
