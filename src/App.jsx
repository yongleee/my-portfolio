import TheNavbar from "./components/TheNavbar";
import TheAbout from "./components/TheAbout";

function App() {
	return (
		<div className="bg-stone-900 min-h-screen">
			<TheNavbar />
			<div className="mx-auto max-w-5xl px-4 pt-2">
				<section id="about">
					<TheAbout />
				</section>
				<section id="projects">
					<p className="text-white">section2</p>
				</section>
				<section id="contact">
					<p className="text-white">section3</p>
				</section>
			</div>
		</div>
	);
}

export default App;
