const products = document.querySelector(".products");
const heartsBtn = products.querySelectorAll(".products__btn-heart");

heartsBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (!btn.classList.contains("products__btn-clicked")) {
			btn.classList.add("products__btn-clicked");
		} else {
			btn.classList.remove("products__btn-clicked");
		}
	});
});
