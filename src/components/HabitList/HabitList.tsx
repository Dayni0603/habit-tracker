import { Habit } from "../../types/Habit";
import HabitItem from "../HabitItem/HabitItem";

interface HabitListProps {
  habits: Habit[];
  toggleCompletion: (id: number) => void;
}


function HabitList({ habits, toggleCompletion }: HabitListProps) {
  return (
   <div>
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  )
}

export default HabitList