// формула подчета размера астероида и его смещения
function CalcAasteroidBg(state) {
	const CalcAasteroidBg = {
		backgroundSize: state.size - state.size / 3,
		backgroundPositionY: function () {
			return -this.backgroundSize + Math.sqrt(this.backgroundSize) + 100;
		},
		backgroundPositionX: function () {
			return -this.backgroundSize + Math.sqrt(this.backgroundSize) * 21;
		},
	};
	return CalcAasteroidBg;
}
export default CalcAasteroidBg;
