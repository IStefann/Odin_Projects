const open = document.querySelector(".hamburger");
const close = document.querySelector("#close");
let sidebar = document.querySelector(".sidebar");

open.addEventListener("click", () => {
	sidebar.classList.remove("off");
	sidebar.classList.add("on");
});
close.addEventListener("click", () => {
	sidebar.classList.remove("on");
	sidebar.classList.add("off");
});