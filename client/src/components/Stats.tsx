const Stats = ({
  percentage,
  title,
}: {
  percentage: string;
  title: string;
}) => {
  return (
    <div>
      <h1>{percentage}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Stats;
