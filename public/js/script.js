// document.addEventListener('DOMContentLoaded', function(){

//   const allButtons = document.querySelectorAll('.searchBtn');
//   const searchBar = document.querySelector('.searchBar');
//   const searchInput = document.getElementById('searchInput');
//   const searchClose = document.getElementById('searchClose');

//   for (var i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener('click', function() {
//       searchBar.style.visibility = 'visible';
//       searchBar.classList.add('open');
//       this.setAttribute('aria-expanded', 'true');
//       searchInput.focus();
//     });
//   }

//   searchClose.addEventListener('click', function() {
//     searchBar.style.visibility = 'hidden';
//     searchBar.classList.remove('open');
//     this.setAttribute('aria-expanded', 'false');
//   });


// });


const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const sidebar = document.querySelector(".sidebar");

toggleBtn.onclick = () => {
    sidebar.classList.toggle("open");
    const isOpen = sidebar.classList.contains(open);

    toggleBtnIcon.classList = isOpen
    ? "fa fa-times"
    : "fa-solid fa-bars"
}