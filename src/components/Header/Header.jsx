import React, { useEffect } from "react";
import { HashRouter, Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<HashRouter>
			<header className="header">
				<div className="header__text-wrap">
					<h1 className="header__title">
						<Link className="header__title-link" to="/">
							ARMAGGEDON V
						</Link>
					</h1>
					<h2 className="header__subtitle">
						Сервис мониторинга и уничтожения астероидов, опасно подлетающих
						к Земле.
					</h2>
				</div>
				<nav className="header__nav">
					<Link id="main-link" className="header__link" to="/">
						Астероиды
					</Link>
					<Link id="destroy-link" className="header__link" to="/destroy">
						Уничтожение
					</Link>
				</nav>
			</header>
		</HashRouter>
	);
}

export default Header;
