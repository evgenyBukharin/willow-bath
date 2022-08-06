import gsap from "gsap";

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const body = document.querySelector(".page__body");

document.addEventListener("DOMContentLoaded", () => {
	burger.addEventListener("click", () => {
		if (!burger.classList.contains("burger--active")) {
			gsap.fromTo(menu, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 });
			burger.classList.add("burger--active");
			body.style.overflow = "hidden";
		} else {
			gsap.to(menu, { x: "-100%", opacity: 0 });
			burger.classList.remove("burger--active");
			body.style.overflow = "visible";
		}
	});
});
