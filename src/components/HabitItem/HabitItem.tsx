import { Habit } from "../../types/Habit";
import "./HabitItem.css";

interface HabiltItemProps {
  habit: Habit;
  toggleCompletion: (id: number) => void;
}

function HabitItem({ habit, toggleCompletion }: HabiltItemProps) {
  return (
    <div className="habit-item">
      <span className={habit.completedToday ? "completed-text" : ""}>
        {habit.name} ({habit.category})
      </span>

      <button
        className={`status-btn ${habit.completedToday ? "" : "completed"}`}
        onClick={() => toggleCompletion(habit.id)}
      >
        {habit.completedToday ? "Completed" : "Not Completed"}
      </button>
    </div>
  );
}

export default HabitItem;
