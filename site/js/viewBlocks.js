document.getElementById('view').onmouseover = function () {
   let mas = document.getElementById('content').getElementsByClassName('r');
   for(let i = 0; i < mas.length; ++i)
   {
      mas[i].classList.toggle("row");
      mas[i].classList.toggle("justify-content-around");
   }
   let mas2 = document.getElementById('content').getElementsByClassName('item');
   for(let i = 0; i < mas2.length; ++i)
   {
      mas2[i].classList.toggle("col-md-3");
      mas2[i].classList.toggle("row");
      mas2[i].getElementsByClassName('item-desc')[0].classList.toggle("col-md-5");
   }
}
