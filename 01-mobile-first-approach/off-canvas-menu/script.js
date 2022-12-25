const hambergerButtonElement = document.getElementById("hamburger");
const draweElement = document.getElementById("drawer");
const mainElement = document.querySelector("main");

console.log(hambergerButtonElement, draweElement);

hambergerButtonElement.addEventListener("click", (event) => {
  draweElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  draweElement.classList.toggle("open");
  event.stopPropagation();
});
