let menuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function () {
    let subMenu = menuLinks[i].nextElementSibling;

    // Remove "show" class from previously open submenus
    let allSubMenus = document.querySelectorAll(".submenu");
    for (let j = 0; j < allSubMenus.length; j++) {
      if (allSubMenus[j] !== subMenu) {
        allSubMenus[j].classList.remove("show");
        menuLinks[j].querySelector(".arrow").classList.remove("rotate");
      }
    }

    subMenu.classList.toggle("show");
    menuLinks[i].querySelector(".arrow").classList.toggle("rotate");
  });
}

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
  document
    .querySelector(".header__contact")
    .classList.toggle("header__contact--open");
});

// Close all submenus when clicking outside of them or submenu links
document.addEventListener("click", function (event) {
  let target = event.target;

  if (
    !target.classList.contains("submenu") &&
    !target.classList.contains("menu__link")
  ) {
    let allSubMenus = document.querySelectorAll(".submenu");
    let allArrows = document.querySelectorAll(".arrow");
    for (let i = 0; i < allSubMenus.length; i++) {
      allSubMenus[i].classList.remove("show");
      allArrows[i].classList.remove("rotate");
    }
  }
});

// Add event listener for clicks outside the menu and burger
document.addEventListener("click", function (event) {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  // Check if the click target is not the burger or menu and if the burger has the 'active' class
  if (
    !burger.contains(event.target) &&
    !menu.contains(event.target) &&
    burger.classList.contains("active")
  ) {
    burger.classList.remove("active");
    menu.classList.remove("open");
    document
      .querySelector(".header__contact")
      .classList.remove("header__contact--open");
  }
});
