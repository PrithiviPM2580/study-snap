import { Button } from "./ui/button";

const Home = () => {
	return (
		<section className="min-h-dvh py-30 sm:py-50 flex flex-col gap-4 md:gap-20">
			<div className="max-w-5xl mx-auto flex-center flex-col gap-3 sm:gap-8">
				<div className="flex-center nav-container">
					<div className="nav-circle flex-center">
						<img
							className="nav-image"
							src="./svgs/thunder.svg"
							alt="Thunder Logo"
						/>
					</div>
					<h4 className="nav-text">AI-Powered Learning Assistant</h4>
				</div>
				<div>
					<h1 className="text-3xl sm:text-5xl md:text-[80px] lg:w-8xl md:leading-20 font-bold text-center">
						Study <span className="text-study-snap-700">Smarter Snap</span> Your{" "}
						<br /> Syllabus into Success.
					</h1>
				</div>
				<p className="text-center w-[80%] sm:w-[60%] text-xs sm:text-base md:text-xl">
					An AI-powered platform that turns your syllabus into notes, practice
					questions, and quick revisions—saving time and improving exam
					preparation for you.
				</p>
				<div className="flex-center gap-1.5 sm:gap-2 md:gap-3">
					<Button className="bg-study-snap-700 rounded-full py-4 px-2 md:py-7 md:px-4 text-xs md:text-base hover:bg-study-snap-500">
						<span>🚀</span>
						Get Started Free
					</Button>
					<Button className="bg-[#EEEEEE] rounded-full py-4 px-2 text-study-snap-700 text-xs md:py-7 md:px-4 md:text-base hover:bg-[#E0E0E0]">
						<div className="nav-circle flex-center">
							<img
								className="w-3 h-3 sm:w-4 sm:h-4"
								src="./svgs/video.svg"
								alt="Video Logo"
							/>
						</div>
						See How It Works
					</Button>
				</div>
			</div>
			<div className="w-7xl h-[60vh] mx-auto bg-[#eeeeee] rounded-4xl"></div>
		</section>
	);
};

export default Home;
