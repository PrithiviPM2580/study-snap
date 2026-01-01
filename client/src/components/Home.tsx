const Home = () => {
  return (
    <section className="min-h-dvh py-30 sm:py-60 flex flex-col bg-red-300">
      <div className="max-w-7xl mx-auto bg-blue-200 flex-center flex-col gap-2">
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
          <h1 className="text-3xl font-bold">
            Study <span className="text-study-snap-700">Smarter Snap</span>Your{" "}
            <br /> Syllabus into Success.
          </h1>
        </div>
        <p className="text-center">
          An AI-powered platform that turns your syllabus into notes, practice
          questions, and quick revisions—saving time and improving exam prep.
        </p>
        <div></div>
      </div>
      <div></div>
    </section>
  );
};

export default Home;
