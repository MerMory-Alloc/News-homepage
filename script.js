const menu_icon=document.querySelector(".menu__icon");
const exit_icon = document.querySelector(".exit__menu__icon");
const nav_list=document.querySelector(".nav__list");
const overlay=document.querySelector(".overlay");

menu_icon.addEventListener("click",showNav);
function showNav(){
  menu_icon.style.display="none";
  exit_icon.style.display="initial";
  nav_list.style.display="initial";
  overlay.style.display="initial";
  document.body.classList.add("nav__out");
}

exit_icon.addEventListener("click",hideNav);
function hideNav(){
  menu_icon.style.display="initial";
  exit_icon.style.display="none";
  nav_list.style.display="none";
  overlay.style.display="none";
  document.body.classList.remove("nav__out");
}
