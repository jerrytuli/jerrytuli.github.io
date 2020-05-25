// nav bar
const menuBtn = document.querySelector(".menu_btn");
const navLinks = document.querySelector(".nav_links");
menuBtn.addEventListener("click", function () {
  let value = navLinks.classList.contains("nav_slide");

  if (value) {
    navLinks.classList.remove("nav_slide");
    menuBtn.src = "./svg/menu.svg";
  } else {
    navLinks.classList.add("nav_slide");
    menuBtn.src = "./svg/close.svg";
  }
});

// pop up form
const openForm = document.querySelector(".open_form");
const closeForm = document.querySelector(".close_form");
const contactForm = document.querySelector(".form");

openForm.addEventListener("click", function () {
  contactForm.style.display = "flex";
});
closeForm.addEventListener("click", function () {
  contactForm.style.display = "none";
});
