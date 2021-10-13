const phone = document.querySelector(".phone");
const tablet = document.querySelector(".tablet");

const options = {};

const myObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, options);

myObserver.observe(tablet);
myObserver.observe(phone);

// Nav menu
const nav = document.querySelector(".nav__list");
const hamburMenu = document.querySelector(".nav__hambur-menu");

hamburMenu.addEventListener("click", () => {
  const val = hamburMenu.getAttribute("aria-expanded");
  console.log(val);
  if (val === "false") {
    nav.classList.add("is-visible");
    hamburMenu.setAttribute("aria-expanded", "true");
  } else {
    nav.classList.remove("is-visible");
    hamburMenu.setAttribute("aria-expanded", "false");
  }
});
