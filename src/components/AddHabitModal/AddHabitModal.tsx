import React, { useState } from "react";
import { Habit } from "../../types/Habit";
import "./AddHabitModal.css";

interface AddHabitProps {
  isOpen: boolean;
  onClose: () => void;
  onAddHabit: (habit: Omit<Habit, "id">) => void;
}

function AddHabitModal({ isOpen, onClose, onAddHabit }: AddHabitProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<"Health" | "Work" | "Personal">(
    "Personal"
  );

  const submit = () => {
    if (!name.trim() || !category.trim()) return;

    onAddHabit({
      name,
      category,
      completedToday: false,
    });

    setName("");
    setCategory("Personal");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop simple">
      <div className="modal simple-modal">
        <h2 className="modal-title">Add Habit</h2>

        <input
          className="modal-input"
          type="text"
          placeholder="Habit name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="modal-select"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as "Health" | "Work" | "Personal")
          }
        >
          <option value="Health">Health</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>

        <div className="modal-actions simple-actions">
          <button className="primary-btn" onClick={submit}>
            Add
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitModal;
