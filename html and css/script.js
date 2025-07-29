// const ellogolink = document.querySelector(".site-header-title");

// const elChangeLogoTextButton = document.querySelector = "change-logo-text-button";
// elChangeLogoTextButton.addEventListener("click" , function () {
//  ellogolink.textContent = "boshqa matn";
// });
// Dark mode
const elDarkModeButton = document.querySelector("site-header-dark");

elDarkModeButton.addEventListener("click", function(){
  document.body.classList.add("dark-mode");
});
