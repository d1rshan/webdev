import { useHabit } from "../contexts";

export const HabitCard = ({ habit }) => {
  const { toggleHabitStatus } = useHabit();
  return (
    <div className={`habitCard ${habit.status ? "done" : "not-done"}`}>
      <p>{habit.title}</p>
      <div id="right">
        <span id="streak">{habit.streak} 🔥</span>
        <span id="check" onClick={() => toggleHabitStatus(habit.id)}>
          ✔️
        </span>
      </div>
    </div>
  );
};
