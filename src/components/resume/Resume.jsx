import "./Resume.scss";

function Resume() {
	document.title = "Colin Harfst - Resume";

	return (
		<div className="resume-pdf-wrapper">
			<object className="resume" data="/Colin_Harfst_Resume_Latest.pdf" type="application/pdf" width="100%">
				<div style={{ marginBottom: "60px" }}>
					<h3>Click the image below to download my resume.</h3>
					<a href="/Colin_Harfst_Resume_Latest.pdf">
						<img src="/Colin_Harfst_Resume_Latest.png" alt="resume" />
					</a>
				</div>
			</object>
		</div>
	);
}

export default Resume;
