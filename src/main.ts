import Flicking from '@egjs/flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';

import '@egjs/flicking/dist/flicking.min.css';
import './style/pagination.scss';
import './style/style.scss';
import './style/reset.scss';

const flicking = new Flicking('.first-screen__gallery', {
  circular: true,
  horizontal: false
});

flicking.addPlugins(new Pagination({
  type: 'bullet',
}));

flicking.addPlugins(new AutoPlay({
  stopOnHover: true
}));

document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
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
});
