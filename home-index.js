const districtMenu = document.querySelector(".district-menu");
const selectMenuBtn = document.querySelector(".select-menu-btn");
const selectText = document.querySelector(".select-text");
const districtOptions = document.querySelectorAll(".district-option");
const kannadaMainNav = document.querySelector(".kannada-main-nav");
const kannadaSubNav = document.querySelector(".kannada-sub-nav");
const header = document.querySelector("header");
const kannadaBreakingNews = document.querySelector(".kannada-breaking-news");
const kannadaTheme = document.querySelector(".kannada-theme");

const icon = document.querySelector(".nav-icon");
const megaMenu = document.querySelector(".kannada-mega-menu");

const breakingLeft = document.querySelector(".breaking-news-carousel");
const mainNews = document.querySelectorAll(".breaking-news-main-carousel");
const arrowButtons = document.querySelectorAll(".button");

const districts = document.querySelector(".karnataka-districts");
const arrowIcons = document.querySelectorAll(".arrow-icon i");

const trending = document.querySelector(".trending-topics");
const trendingArrowIcons = document.querySelectorAll(".trending-arrow-icon i");

const headerBottom = header.getBoundingClientRect().bottom;
const kannadaNavHeight = kannadaMainNav.getBoundingClientRect().bottom;

window.addEventListener("load", function () {
  kannadaMainNav.style.top = `${headerBottom}px`;
  kannadaTheme.style.marginTop = `${headerBottom + kannadaNavHeight}px`;
});

window.addEventListener("resize", function () {
  kannadaMainNav.style.top = `${headerBottom}px`;
  kannadaTheme.style.marginTop = `${headerBottom + kannadaNavHeight}px`;
});

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
  icon.addEventListener("click", function (e) {
    districts.scrollLeft += e.target.id === "left" ? -100 : 100;
  });
});

trendingArrowIcons.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    trending.scrollLeft += e.target.id === "left" ? -100 : 100;
  });
});

// details page js

const arrowIcon = document.querySelectorAll(".arrow-icon");
const relatedStories = document.querySelector(".related-stories-card");

arrowIcon.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    relatedStories.scrollLeft += e.target.id === "left" ? -300 : 300;
  });
});
