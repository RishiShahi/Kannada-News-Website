const arrowIcon = document.querySelectorAll(".arrow-icon");
const relatedStories = document.querySelector(".related-stories-card");

arrowIcon.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    relatedStories.scrollLeft += e.target.id === "left" ? -300 : 300;
  });
});
