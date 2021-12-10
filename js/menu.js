let menu = document.getElementById('main-header-js');
let menuh = document.getElementById('main-header-js').offsetHeight;

window.addEventListener ('scroll', function(){
  if (window.pageYOffset > menuh) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
    menu.classList.remove('headerback');
  }
});

/* Menú desplegable  */

let button = document.getElementById('bmenu');
let mainNav= document.getElementById('desplegable');

button.addEventListener('click', function(){
mainNav.classList.toggle('show');
menu.classList.toggle('headerback');
button.classList.toggle('active');

});

mainNav.addEventListener('click', function(){
if (media.matches) { // Solo se produce este cambio cuando la resolución es menor a 1024px, para evitar que "button" cambie de clase cuando la resolución sea 1024px o mayor

} else {
button.classList.toggle('active');
mainNav.classList.remove('show');
}
});
