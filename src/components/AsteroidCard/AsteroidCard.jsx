import React from "react";
import "./AsteroidCard.css";
import { Link } from "react-router-dom";
import CalcAasteroidBg from "../functions/CalcAasteroidBg";
import Specifications from "../functions/Characteristics";

function AsteroidCard({ item, distanceDisplay }) {
	localStorage.setItem("distanceDisplay", distanceDisplay);
	const state = new Specifications(item);

	const style = {
		backgroundSize: CalcAasteroidBg(state).backgroundSize,
		backgroundPositionY: CalcAasteroidBg(state).backgroundPositionY(),
		backgroundPositionX: CalcAasteroidBg(state).backgroundPositionX(),
	};
	return (
		<div
			className={
				state.isDanger ? "bg-gradient bg-gradient_danger" : "bg-gradient"
			}
		>
			<div style={style} className="ast-card">
				<div className="ast-card__start"></div>

				<div className="ast-card__medium">
					<h2
						title={`подробнее об ${item.designation}`}
						className="ast-card__name"
					>
						<Link
                            className="ast-card__name-link"
                            to={`/details?id=${item.id}`}
                        >
							{item.name.substr(1).slice(0, -1)}
						</Link>
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
						<span className="ast-card__decr-title">Размер</span>
						<span className="ast-card__decr-dots"> </span>
						<span className="ast-card__decr-value">{state.size} м</span>
					</div>
				</div>

				<div className="ast-card__end">
					<p className="ast-card__evaluate-title">Оценка: </p>
					<p className="ast-card__evaluate-value">
						{state.isDanger ? "Опасен" : "Не опасен"}
					</p>
					<button data-id={item.id} className="ast-card__destroy-btn">
						На уничтожение
					</button>
				</div>
			</div>
		</div>
	);
}

export default AsteroidCard;
