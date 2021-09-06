$(function(){

    $('.carousel__wrapper').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
      });

});


//  Таймер

let time = 1800;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds: seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}

// очистка поля при вводе букв а не цифр

document.querySelector('.myValidate').addEventListener('keyup', function(){
  this.value = this.value.replace(/[^\d]/g, '');
});

// заседлиный скролинг к форме заказа 

function slowScroll(id) { 
  var offset = 0;
  $('html, body').animate({ 
       scrollTop: $(id).offset().top - offset 
  }, 1000);
  return false; 
} 