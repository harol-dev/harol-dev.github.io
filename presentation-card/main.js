// Iniciar el slider
var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
if(counter > 4){
	counter = 1;
}}, 5000);

// Menu
var menu = document.querySelector('.container__menu');	
var buttonMenuOpen = document.querySelector('.button__menu-open');
var buttonMenuClose = document.querySelector('.icon__menu-close');
var itemMenu = document.querySelectorAll('.item__menu');
var sections = document.querySelector('.container__sections');
var titleHeader = document.querySelector('.title__header');

// Abrir el menu
buttonMenuOpen.addEventListener('click', function(){
	menu.classList.add('active__menu');
	sections.classList.add('hidden');
	titleHeader.style.color = "#eaedf4";
})

// Cerrar el menu
buttonMenuClose.addEventListener('click', function(){
	menu.classList.remove('active__menu');
	sections.classList.remove('hidden');
	titleHeader.style.color = "#000";
})

// Cerrar el menu al dar en uno de los items del mismo
for(let i = 0; i < itemMenu.length; i++){
	itemMenu[i].addEventListener('click', function(){
		menu.classList.remove('active__menu');
		sections.classList.remove('hidden')
		titleHeader.style.color = "#000";
	})
}

// Seleccionar las categorias a mostrar
var titleCategory = document.querySelector('.title__category');
var containerCategory = document.querySelector('.container__category');
var contentCategory = document.querySelectorAll('.content__category');

titleCategory.addEventListener('click', function(){
	containerCategory.classList.toggle('active__category');
})

// Mostrar el contenedor con las categorias a mostrar
for(let i = 0; i < contentCategory.length; i++){
	contentCategory[i].addEventListener('click', function(){
		containerCategory.classList.remove('active__category');
	})
}

// Items del contenedor de categorias
var buttonCategoryAll = document.querySelector('#item__category-all');
var buttonCategory1 = document.querySelector('#item__category-1');
var buttonCategory2 = document.querySelector('#item__category-2');
var buttonCategory3 = document.querySelector('#item__category-3');
var buttonCategory4 = document.querySelector('#item__category-4');

// Categorias de la galeria
var categoryGallery1 = document.querySelectorAll('.category__gallery-1');
var categoryGallery2 = document.querySelectorAll('.category__gallery-2');
var categoryGallery3 = document.querySelectorAll('.category__gallery-3');
var categoryGallery4 = document.querySelectorAll('.category__gallery-4');

// Items de la galeria
var itemGallery = document.querySelectorAll('.gallery__item');

// Mostrar la categoria seleccionada
function visibility(button,section){
	button.addEventListener('click', function(){
		for(let i = 0; i < itemGallery.length; i++){
			itemGallery[i].style.opacity = "0";
		};
		setTimeout(function(){
			for(let i = 0; i < itemGallery.length; i++){
				itemGallery[i].style.display = "none";
			};
			for(let i = 0; i < section.length; i++){
				section[i].style.opacity = "1";
				section[i].style.display = "block";
			}
		},200)
	})
}

// Asignando las secciones que va a afectar
visibility(buttonCategory1,categoryGallery1)
visibility(buttonCategory2,categoryGallery2)
visibility(buttonCategory3,categoryGallery3)
visibility(buttonCategory4,categoryGallery4)

// Mostrar todos los elementos de las categorias

buttonCategoryAll.addEventListener('click', function(){
	for(let i = 0; i < itemGallery.length; i++){
		itemGallery[i].style.opacity = "0";
		itemGallery[i].style.display = "block";
		itemGallery[i].classList.add('gallery__item');
		itemGallery[i].classList.add('icon-expand');
	};
	setTimeout(function(){
		for(let i = 0; i < itemGallery.length; i++){
			itemGallery[i].style.opacity = "1";
		}
	},500)
})

// x

