import { STATS } from "@/constants";
import Stats from "./Stats";

const StatSection = () => {
	return (
		<div className="max-w-7xl mx-auto flex-center grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-46">
			{STATS.map((stat) => (
				<Stats
					key={stat.title}
					percentage={stat.percentage}
					title={stat.title}
				/>
			))}
		</div>
	);
};

export default StatSection;
