import { useState } from "react";
import { Habit } from "../types/Habit";
import { calculateCompletionPercentage } from "../utils/calculateCompletion";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import SummaryStats from "../components/SummaryStats/SummaryStats";
import HabitList from "../components/HabitList/HabitList";
import AddHabitModal from "../components/AddHabitModal/AddHabitModal";
import "./home.css";
function Home() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Exercise", category: "Health", completedToday: false },
    { id: 2, name: "Work on project", category: "Work", completedToday: false },
    { id: 3, name: "Read a book", category: "Personal", completedToday: false },
  ]);

  const [filter, setFilter] = useState<string>("All");

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleCompletion = (id: number) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, completedToday: !h.completedToday } : h
      )
    );
  };

  const filteredHabits =
    filter === "All" ? habits : habits.filter((h) => h.category === filter);

  const completedCount = habits.filter((h) => h.completedToday).length;
  const percentage = calculateCompletionPercentage(habits);

  const addHabit = (habit: Omit<Habit, "id">) => {
    setHabits((prev) => [
      ...prev,
      {
        ...habit,
        id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
      },
    ]);
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>
      <button className="add-btn" onClick={() => setModalOpen(true)}>
        + Add Habit
      </button>
      <CategoryFilter setFilter={setFilter} />
      <SummaryStats
        total={habits.length}
        completed={completedCount}
        percentage={percentage}
      />
      <HabitList habits={filteredHabits} toggleCompletion={toggleCompletion} />
      <AddHabitModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddHabit={addHabit}
      />
    </div>
  );
}

export default Home;
