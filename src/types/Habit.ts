export interface Habit {
  id: number;
  name: string;
  category: "Health" | "Work" | "Personal";
  completedToday: boolean;
}