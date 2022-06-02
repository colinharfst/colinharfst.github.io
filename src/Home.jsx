import "./Home.scss";
import Signature from "./components/signature/Signature";

function Home() {
	document.title = "Colin Harfst - Home";

	return (
		<div className="home">
			<Signature />
		</div>
	);
}

export default Home;
