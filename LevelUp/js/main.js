$(function (){

  $('.reviews__slider').slick({
    arrows: false,
    dots: false,
  })
  $('.reviews__prev').on('click', function(e){
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__next').on('click', function(e){
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })

  $(".header__nav-list").on("click", "a", function(e){
    e.preventDefault();
    var id =$(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);

  })
  $('.burger, .overlay').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})

let time = 1800
const countDownEl = document
.getElementById("countDown")

setInterval(updateCountDown, 1000)

function updateCountDown() {
  const minuts = Math.floor(time/60)
  let seconds = time % 60
  seconds = seconds < 10 ? "0" + seconds:seconds
  countDownEl.innerHTML =  `${minuts}:${seconds}`
  time--
}