import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,

  // set() expects an object and we know () => ({obj}) means a function that is returning this object {obj}
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
