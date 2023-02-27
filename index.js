const districtMenu = document.querySelector(".district-menu");
const selectMenuBtn = document.querySelector(".select-menu-btn");
const selectText = document.querySelector(".select-text");
const districtOptions = document.querySelectorAll(".district-option");

const icon = document.querySelector(".nav-icon");
const megaMenu = document.querySelector(".kannada-mega-menu");

const breakingLeft = document.querySelector(".breaking-news-carousel");
const mainNews = document.querySelectorAll(".breaking-news-main-carousel");
const arrowButtons = document.querySelectorAll(".button");

const districts = document.querySelector(".karnataka-districts");
const arrowIcons = document.querySelectorAll(".arrow-icon i");

const trending = document.querySelector(".trending-topics");
const trendingArrowIcons = document.querySelectorAll(".trending-arrow-icon i");

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

var newsIndex = 0;

function slideNews(e) {
  if (e.target.id === "prev") {
    newsIndex = newsIndex > 0 ? newsIndex - 1 : mainNews.length - 1;
    breakingLeft.style.transform = `translateX(-${newsIndex * 100}%)`;
  } else {
    newsIndex = newsIndex < mainNews.length - 1 ? newsIndex + 1 : 0;
    breakingLeft.style.transform = `translateX(-${newsIndex * 100}%)`;
  }
}

arrowButtons.forEach(function (button) {
  button.addEventListener("click", slideNews);
});

arrowIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    districts.scrollLeft += icon.id === "left" ? -100 : 100;
  });
});

trendingArrowIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    trending.scrollLeft += icon.id === "left" ? -100 : 100;
  });
});
