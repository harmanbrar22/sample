var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = "google.com";
  qrcode.makeCode(elText);
}

makeCode();

$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true, // arrows always enabled
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true // ensure arrows stay on mobile
          }
        }
      ]
    });
  });