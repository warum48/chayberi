//<script type="module">
  //import {tns} from './tiny-slider.js';

 var slider = tns({
    container: '.my-slider',
    items: 4,
    gutter: 10,
    slideBy: 'page',
    autoplay: true,
    controlsText: ['<div class="product-slider-control psc-left"></span>', '<div class="product-slider-control psc-right"></span>'],
  }); 

 
  var slider2 = tns({
    container: '.my-slider2',
    items: 4,
    gutter: 10,
    slideBy: 'page',
    autoplay: true,
    controlsText: ['<div class="product-slider-control psc-left"></span>', '<div class="product-slider-control psc-right"></span>'],
  });

  var slider3 = tns({
    container: '.reviewSlider',
    items: 1,
    gutter: 10,
    slideBy: 'page',
    autoplay: true,
  });
 
//  </script>