var menu = document.querySelector('.container__menu');
var buttonMenu = document.querySelector('.button__menu');
var body = document.querySelector('.body');


buttonMenu.addEventListener('click', function(){
  menu.classList.toggle('active__menu');
  body.classList.toggle('hiddenOverflow');
})

var submenu = document.querySelector('.container__submenu');
var buttonSubmenu = document.querySelector('.submenu');

buttonSubmenu.addEventListener('click', function(){
  submenu.classList.toggle('active__submenu');
})

$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 

