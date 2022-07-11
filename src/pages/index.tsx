import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Hello</h1>
      <button
        className="px-6 py-2 mt-10 bg-black dark:bg-white text-white dark:text-black "
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
