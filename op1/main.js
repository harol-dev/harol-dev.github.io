var menu = document.querySelector('.container__menu');
var buttonMenu = document.querySelector('.button__menu');

buttonMenu.addEventListener('click', function(){
  menu.classList.toggle('active__menu');
})

var submenu = document.querySelector('.container__submenu');
var buttonSubmenu = document.querySelector('.submenu');

buttonSubmenu.addEventListener('click', function(){
  submenu.classList.toggle('active__submenu');
})

$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 

