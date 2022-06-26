  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
      type: 'loop',
      autoplay: 'play'
    } ).mount();
  } );

  // document.querySelector('html').style.overflow = "hidden";

  var hoverElement = document.getElementsByClassName('hover-element');

  function closeHover() {
    hoverElement[0].style.display = "none";
    document.querySelector('html').style.overflow = "visible";
  }