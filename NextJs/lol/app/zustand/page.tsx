"use client";
import { useCounterStore } from "@/app/zustand/_zustand-store/store";

export default function ZustandPage() {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>This is the count of your application: {count}</p>
      <SomeComponent />
    </div>
  );
}

export const SomeComponent = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div>
      <button
        onClick={increment}
        className="bg-white p-2 px-8 text-black rounded-full"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-orange-400 p-2 px-8 text-black rounded-full"
      >
        -
      </button>
    </div>
  );
};
