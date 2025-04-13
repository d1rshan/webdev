import { useContext, createContext} from "react";

export const HabitContext = createContext();

export const useHabit = () =>  useContext(HabitContext);