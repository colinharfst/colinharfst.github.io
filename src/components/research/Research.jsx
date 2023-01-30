import "./Research.scss";

function Research() {
	document.title = "Colin Harfst - Research";

	return (
		<div className="research-pdf-wrapper">
			<object className="research" data="/research.pdf" type="application/pdf" width="100%">
				<div style={{ marginTop: "20px", marginBottom: "60px" }}>
					<a href="/research.pdf">
						<img src="/research-1.png" alt="research page 1" />
					</a>
					<a href="/research.pdf">
						<img src="/research-2.png" alt="research page 2" />
					</a>
				</div>
			</object>
		</div>
	);
}

export default Research;
