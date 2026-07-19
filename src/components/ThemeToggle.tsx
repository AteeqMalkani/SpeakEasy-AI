import { Moon, Sun } from "lucide-react";

type Props = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function ThemeToggle({ darkMode, toggleTheme }: Props) {
  return (
    <button
      onClick={toggleTheme}
      className="
        rounded-xl
        border
        border-slate-300
        dark:border-slate-700
        bg-white
        dark:bg-slate-800 
        p-3
        shadow-md
        transition-all
        duration-200
        hover:scale-105
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-slate-700" size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;
