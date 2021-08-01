import "./Detail.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Specifications from "../functions/Characteristics";
import CalcAasteroidBg from "../functions/CalcAasteroidBg";

function Detail() {
	const [asteroiData, setAsteroiData] = useState(0);
	const [fetching, setfetching] = useState(true);
	const [distanceDisplay, setdistanceDisplay] = useState(
		localStorage.getItem("distanceDisplay") || "km"
	);

	useEffect(() => {
		if (document.querySelector(".header__link.header__link_active"))
			document
				.querySelector(".header__link.header__link_active")
				.classList.remove("header__link_active");

		if (document.querySelector(".filter__item.filter__item_active")) {
			document
				.querySelector(".filter__item.filter__item_active")
				.classList.remove("filter__item_active");
		}
		if (
			document.querySelector(`.filter__item[data-value='${distanceDisplay}']`)
		) {
			document
				.querySelector(`.filter__item[data-value='${distanceDisplay}']`)
				.classList.add("filter__item_active");
		}
	}, []);

	useEffect(() => {
		const id = window.location.hash.split("id=")[1];
		fetch(
			`https://www.neowsapp.com/rest/v1/neo/${id}?api_key=Qg1ksuSgpuseUwl1wPGcWh4xVL45gHz3dv83Jmfp`
		)
			.then((answ) => answ.json())
			.then((data) => setAsteroiData(data))
			.finally(() => setfetching(false));
	}, []);

	let state, style;
	if (asteroiData) {
		state = new Specifications(asteroiData);
		style = {
			backgroundSize: CalcAasteroidBg(state).backgroundSize,
			backgroundPositionY: CalcAasteroidBg(state).backgroundPositionY(),
			backgroundPositionX: CalcAasteroidBg(state).backgroundPositionX(),
		};
	}

	const distanceChange = (e) => {
		setdistanceDisplay(e.target.dataset.value);
		document
			.querySelector(".filter__item.filter__item_active")
			.classList.remove("filter__item_active");
		e.target.classList.add("filter__item_active");
	};

	return fetching ? (
		<CircularProgress />
	) : (
		<>
			<div className="filter__distance-wrap filter__distance-wrap_detail">
				<div className="filter__km-wrap">
					<span className="filter__distance-title">Расстояние </span>
					<div
						onClick={distanceChange}
						data-value="km"
						className={
							distanceDisplay === "km"
								? "filter__item filter__item_active"
								: "filter__item"
						}
					>
						в километрах,
					</div>
				</div>
				<div
					onClick={distanceChange}
					data-value="lu"
					className={
						distanceDisplay === "lu"
							? "filter__item filter__item_active"
							: "filter__item"
					}
				>
					{" "}
					в дистанциях до луны
				</div>
			</div>
			<div
				className={
					state.isDanger
						? "bg-gradient bg-gradient_details bg-gradient_danger"
						: "bg-gradient bg-gradient_details"
				}
			>
				<div style={style} className="ast-card">
					<div className="ast-card__start"></div>
					<div className="ast-card__medium">
						<h2 className="ast-card__name ast-card__name_basket">
							{asteroiData.designation}
						</h2>
						<div className="ast-card__decr-item ast-card__decr_date">
							<span className="ast-card__decr-title">Дата</span>
							<span className="ast-card__decr-dots"></span>
							<span className="ast-card__decr-value">
								{state.date.slice(0, -3)}
							</span>
						</div>
						<div className="ast-card__decr-item ast-card__decr_dist">
							<span className="ast-card__decr-title">Расстояние</span>
							<span className="ast-card__decr-dots"></span>
							<span className="ast-card__decr-value">
								{distanceDisplay === "km"
									? state.distanceKM
									: state.distanceLunar}
							</span>
						</div>
						<div className="ast-card__decr-item ast-card__decr-size">
							<span className="ast-card__decr-title">
                                Размер
                            </span>
							<span className="ast-card__decr-dots"></span>
							<span className="ast-card__decr-value">
                                {state.size} м
                            </span>
						</div>
					</div>

					<div className="ast-card__end">
						<p className="ast-card__evaluate-title">Оценка: </p>
						<p className="ast-card__evaluate-value">
							{state.isDanger ? "Опасен" : "Не опасен"}
						</p>
						<button
                            data-id={asteroiData.id}
                            className="ast-card__destroy-btn"
                        >
							На уничтожение
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
