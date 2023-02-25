const districtMenu = document.querySelector(".district-menu");
const selectMenuBtn = document.querySelector(".select-menu-btn");
const selectText = document.querySelector(".select-text");
const districtOptions = document.querySelectorAll(".district-option");

const icon = document.querySelector(".nav-icon");
const megaMenu = document.querySelector(".kannada-mega-menu");

selectMenuBtn.addEventListener("click", function () {
  districtMenu.classList.toggle("active");
});

districtOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    let selectedOption = option.innerText;
    selectText.innerText = selectedOption;
  });
});

icon.addEventListener("click", function () {
  icon.classList.toggle("active");
  megaMenu.classList.toggle("active-mega");
});
