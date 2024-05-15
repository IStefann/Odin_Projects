const open = document.querySelector(".hamburger");
const close = document.querySelector("#close");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

open.addEventListener("click", () => {
	body.style.position = "fixed";
	sidebar.classList.remove("off");
	sidebar.classList.add("on");
});
close.addEventListener("click", () => {
	body.style.position = "";
	sidebar.classList.remove("on");
	sidebar.classList.add("off");
});