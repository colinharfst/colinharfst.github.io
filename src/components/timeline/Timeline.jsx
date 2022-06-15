import "./Timeline.scss";

function Timeline() {
	document.title = "Colin Harfst - Timeline";

	const timeline = [
		{ year: 2022, month: "May", event: "We got engaged!" },
		{ year: 2022, month: "Feb", event: "Left DC for the road" },
		{ year: 2020, month: "May", event: "Moved to DC" },
		{ year: 2020, month: "May", event: "We adopted Ellwood!" },
		{ year: 2018, month: "Aug", event: "Moved to Richmond" },
		{ year: 2017, month: "Sept", event: "Colin and Leah meet" },
		{ year: 2014, month: "Aug", event: "College begins at UVA" },
		{ year: 1995, month: "Nov", event: "Baby Colin is born" },
	];

	const monthNumDict = {
		Jan: 1,
		Feb: 2,
		Mar: 3,
		Apr: 4,
		May: 5,
		Jun: 6,
		Jul: 7,
		Aug: 8,
		Sept: 9,
		Oct: 10,
		Nov: 11,
		Dec: 12,
	};

	// const verticalDistance = e => {
	// 	const years = e.year - 1995;
	// 	const months = monthNumDict[e.month] - 11;
	// 	return years + months / 12;
	// };

	const verticalDistance = (e1, e2) => {
		const years = e2.year - e1.year;
		const months = monthNumDict[e2.month] - monthNumDict[e1.month];
		return years + months / 12;
	};

	const renderLifeEvent = (e, ind) => {
		return (
			<div
				className="event"
				key={ind}
				style={{
					marginTop: ind === 0 ? "0px" : `${verticalDistance(e, timeline[ind - 1]) * 180 - 110}px`,
					alignSelf: ind === timeline.length - 1 ? "center" : ind % 2 === 0 ? "flex-start" : "flex-end",
				}}
			>
				<h3>{e.month + " " + e.year}</h3>
				<h3>{e.event}</h3>
			</div>
		);
	};

	return (
		<div className="timeline-container">
			<div className="present-moment" />
			<div className="timeline">
				<span className="line" />
				{timeline.map((e, ind) => renderLifeEvent(e, ind))}
				{/* <span className="line">{timeline.map((e, ind) => renderLifeEvent(e, ind))}</span> */}
			</div>
		</div>
	);
}

export default Timeline;
