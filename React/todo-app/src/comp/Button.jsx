import { useTheme } from "../contexts/index";

export const Button = () => {
  const { toggleTheme } = useTheme();
  return (
    <button
      className="bg-black text-white border rounded-lg dark:bg-white dark:text-black p-2"
      onClick={toggleTheme}
    >
      Toggle theme!!
    </button>
  );
};
