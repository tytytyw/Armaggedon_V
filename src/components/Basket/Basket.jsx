import React, { useEffect } from "react";

function Basket() {
	useEffect(() => {
		if (document.querySelector(".header__link.header__link_active")) {
			document.querySelector(".header__link.header__link_active")
				.classList.remove("header__link_active");
		}
		document.querySelector("#destroy-link.header__link")
			.classList.add("header__link_active");
	}, []);

	return (
        <div>
            basket
        </div>
    )
}

export default Basket;
