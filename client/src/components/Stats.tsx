const Stats = ({
	percentage,
	title,
}: {
	percentage: string;
	title: string;
}) => {
	return (
		<div className="flex-center flex-col">
			<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium">
				{percentage}
			</h1>
			<p className="text-center text-xs md:text-base">{title}</p>
		</div>
	);
};

export default Stats;
