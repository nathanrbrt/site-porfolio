let currentPage = 0;
const pages = document.querySelectorAll('.page');
const bottomBar = document.querySelector('.bottom-bar');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

function scrollToPage(pageIndex) {
  currentPage = pageIndex;
  document.querySelector('.horizontal-scroll').style.transform = `translateX(-${currentPage * 100}vw)`;
}

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentPage < pages.length - 1) {
    scrollToPage(currentPage + 1);
  } else if (event.deltaY < 0 && currentPage > 0) {
    scrollToPage(currentPage - 1);
  }
});

bottomBar.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeButton.addEventListener('click', () => {
  overlay.classList.remove('show');
});

function showText(textId) {
  // Esconde todos os textos
  var texts = document.querySelectorAll('.hidden-text');
  texts.forEach(function(text) {
      text.classList.remove('show'); // Remove a classe 'show' de todos os textos
  });

  // Mostra o texto clicado
  var textToShow = document.getElementById(textId);
  textToShow.classList.add('show'); // Adiciona a classe 'show' ao texto clicado
}