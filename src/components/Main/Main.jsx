import React, { useState, useEffect } from "react";
import "./Main.css";
import FilterAsteroids from "../FilterAsteroids/FilterAsteroids";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import CircularProgress from "@material-ui/core/CircularProgress";

function Main() {
	const [asteroidsList, setAsteroidsList] = useState([]);
	const [visibleAsteroidList, setVisibleAsteroidList] = useState([]);
	const [displayOnlyDanger, setdisplayOnlyDanger] = useState(false);
	const [fetching, setfetching] = useState(true);
	const [requestUrl, setrequestUrl] = useState(
		"https://api.nasa.gov/neo/rest/v1/feed?api_key=Qg1ksuSgpuseUwl1wPGcWh4xVL45gHz3dv83Jmfp"
	);
	const [distanceDisplay, setdistanceDisplay] = useState(
		localStorage.getItem("distanceDisplay") || "km"
	);

	useEffect(() => {
		if (fetching) {
			fetch(requestUrl)
				.then((answer) => {
					return answer.json();
				})
				.then((data) => {
					setrequestUrl(data.links.next.replace("http://", "https://"));
					let dataConcat = [];
					Object.keys(data["near_earth_objects"])
						.sort((a, b) => new Date(a) - new Date(b))
						.forEach((item, index) => {
							if (index !== Object.keys(data["near_earth_objects"]).length - 1)
								dataConcat = [
									...dataConcat,
									...data["near_earth_objects"][item],
								];
						});
					setAsteroidsList(
						[...asteroidsList, ...dataConcat].sort(
							(a, b) =>
								a["close_approach_data"][0]["epoch_date_close_approach"] -
								b["close_approach_data"][0]["epoch_date_close_approach"]
						)
					);
				})
				.catch((error) => console.log(error))
				.finally(() => setfetching(false));
		}
	}, [fetching]);

	useEffect(() => {
		setVisibleAsteroidList(
			displayOnlyDanger
				? asteroidsList.filter(item => item["is_potentially_hazardous_asteroid"])
				: asteroidsList
		);
	}, [asteroidsList, displayOnlyDanger]);

	useEffect(() => {
		document.addEventListener("scroll", scrollHadler);
		if (document.querySelector(".header__link.header__link_active")) {
			document.querySelector(".header__link.header__link_active")
				.classList.remove("header__link_active");
		}
		document.querySelector("#main-link.header__link")
			.classList.add("header__link_active");

		return () => {
			document.removeEventListener("scroll", scrollHadler);
		};
	}, []);

	const scrollHadler = (e) => {
		if (
			e.target.documentElement.scrollHeight -(e.target.documentElement.scrollTop + window.innerHeight)
            < 250
		) setfetching(true)
	};

	const distanceChange = (e) => {
		setdistanceDisplay(e.target.dataset.value);
		document
			.querySelector(".filter__item.filter__item_active")
			.classList.remove("filter__item_active");
		e.target.classList.add("filter__item_active");
	};

	const clickFilter = (e) => {
		setdisplayOnlyDanger(e.target.checked);
	};

	return (
		<div className="main">
			<FilterAsteroids
				distanceChange={distanceChange}
				clickFilter={clickFilter}
				distanceDisplay={distanceDisplay}
			/>
			<div className="ast-wrap">
				{visibleAsteroidList.map((item) => (
					<AsteroidCard
						key={
							item.id +
							item["close_approach_data"][0]["close_approach_date_full"]
						}
						item={item}
						distanceDisplay={distanceDisplay}
						// detailsClick={detailsClick}
					/>
				))}
				{fetch ? <CircularProgress /> : ""}
			</div>
		</div>
	);
}

export default Main;
