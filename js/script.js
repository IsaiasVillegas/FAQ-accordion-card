const items = document.querySelectorAll(".accordion__item");
const btns = document.querySelectorAll(".accordion__btn");

const removeActiveClass = function () {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.parentElement.classList.contains("active")) {
      removeActiveClass();
    } else {
      removeActiveClass();
      btn.parentElement.classList.add("active");
    }
  });
});
