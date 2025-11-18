import "./SummaryStats.css";

interface SummeryProps {
  total: number;
  completed: number;
  percentage: number;
}

function SummaryStats({ total, completed, percentage }: SummeryProps) {
  return (
    <div
      className={`summary ${
        percentage < 40 ? "low" : percentage < 80 ? "medium" : "high"
      }`}
    >
      <p>
        {completed} / {total} habits completed today{" "}
        <span>({percentage}%)</span>
      </p>
    </div>
  );
}

export default SummaryStats;
