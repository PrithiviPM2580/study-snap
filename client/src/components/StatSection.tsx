import { STATS } from "@/constants";
import Stats from "./Stats";

const StatSection = () => {
  return (
    <div>
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
