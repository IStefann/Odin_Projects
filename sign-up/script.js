const button = document.querySelector("button");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const noMatch = document.querySelector(".noMatch");

form.addEventListener("submit", (event) => {
	let pass = document.querySelector("#password");
	let passConfirm = document.querySelector("#passwordConfirm");
	if (pass.value !== passConfirm.value) {
		window.alert("Passwords do not match!");
		event.preventDefault();
		pass.classList.add("invalid");
		passConfirm.classList.add("invalid");
        noMatch.classList.remove("disable");
        noMatch.classList.add("enable");
	}
});

inputs.forEach((input) => {
	input.addEventListener("click", () => {
		input.classList.remove("invalid");
	});
});
