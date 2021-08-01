// запись хар-к астероида
function Specifications(item) {
	return {
		date: new Date(
			item["close_approach_data"][0]["epoch_date_close_approach"]
		).toLocaleString("ru", { day: "numeric", month: "long", year: "numeric" }),
		distanceKM:
			Math.round(
				+item["close_approach_data"][0]["miss_distance"]["kilometers"]
			) + " км",
		distanceLunar:
			(+item["close_approach_data"][0]["miss_distance"]["lunar"]).toFixed(1) +
			" раз до луны",
		size: Math.round(
			item["estimated_diameter"]["meters"]["estimated_diameter_max"]
		),
		isDanger: item["is_potentially_hazardous_asteroid"],
	};
}

export default Specifications;
