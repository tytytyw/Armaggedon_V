import React, { useState, useEffect } from "react";
import "./FilterAsteroids.css";

function FilterAsteroids({ distanceChange, clickFilter, distanceDisplay }) {
	const [distanceDisplayValue, setdistanceDisplayValue] = useState(
		distanceDisplay
	);
	useEffect(() => {
		if (document.querySelector(".filter__item.filter__item_active")) {
			document
				.querySelector(".filter__item.filter__item_active")
				.classList.remove("filter__item_active");
		}
		document
			.querySelector(`.filter__item[data-value='${distanceDisplayValue}']`)
			.classList.add("filter__item_active");
	}, [distanceDisplayValue]);

	return (
		<div className="filter">
			<div className="filter__danger-wrap">
				<input
					onChange={clickFilter}
					type="checkbox"
					name="filter_danger"
					id="filter_danger"
				/>
				<label htmlFor="filter_danger">
					<span>Показать только опасные</span>
				</label>
			</div>
			<div className="filter__distance-wrap">
				<div className="filter__km-wrap">
					<span className="filter__distance-title">Расстояние </span>
					<div
						onClick={distanceChange}
						data-value="km"
						className="filter__item"
					>
						в километрах,{" "}
					</div>
				</div>
				<div onClick={distanceChange} data-value="lu" className="filter__item">
					в дистанциях до луны
				</div>
			</div>
		</div>
	);
}

export default FilterAsteroids;
