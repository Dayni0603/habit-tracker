import { Habit } from "../types/Habit";

export const calculateCompletionPercentage = (habits: Habit[]): number => {
  if (habits.length === 0) return 0;
  const completed = habits.filter(h => h.completedToday).length;
  return Math.round((completed / habits.length) * 100);
};