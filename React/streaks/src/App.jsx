import { useState } from "react";
import { HabitCard } from "./components";
import { HabitContext } from "./contexts";

export const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, title: "habit 1", streak: 0, status: false },
  ]);

  function addHabit(habit) {
    setHabits((prev) => [...prev, habit]);
  }

  function deleteHabit(id) {
    setHabits((prev) => {
      return prev.filter((prevHabit) => prevHabit.id !== id);
    });
  }

  function toggleHabitStatus(id) {
    setHabits((prev) => {
      return prev.map((prevHabit) =>
        prevHabit.id === id
          ? {
              ...prevHabit,
              streak: prevHabit.status
                ? prevHabit.streak - 1
                : prevHabit.streak + 1,
              status: !prevHabit.status,
            }
          : prevHabit
      );
    });
  }
  return (
    <main>
      <HabitContext.Provider
        value={{ habits, addHabit, deleteHabit, toggleHabitStatus }}
      >
        <div className="header">
          <h1>Streaks 🔥</h1>
          <span>➕</span>
        </div>

        <div id="bg">
          <div id="modal">MODAL</div>
        </div>
        <div className="habitList">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
        {/* add habit button  */}
      </HabitContext.Provider>
    </main>
  );
};
