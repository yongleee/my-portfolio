import { useState } from "react";

export default function TheNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="relative">
			<div className="flex justify-between items-center flex-wrap xl:max-w-6xl xl:mx-auto max-w-full font-robotoMono pt-10">
				<a href="#">
					<h1 className="px-5 text-stone-200 font-bold tracking-wider">
						Yong Le
					</h1>
				</a>
				<div className="lg:hidden block absolute top-4 right-4">
					<button
						className="text-stone-300"
						onClick={() => setIsOpen((prev) => !prev)}
					>
						{!isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
				<nav>
					<ul className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
						<li className="px-5 text-stone-300">
							<a href="#about">// about</a>
						</li>
						<li className="px-5 text-stone-300">
							<a href="#projects">// projects</a>
						</li>
						<li className="px-5 text-stone-300">
							<a href="#contact">// contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
