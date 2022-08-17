import { useTheme } from 'next-themes';
import { GithubLogo, Lightbulb } from 'phosphor-react';
import { useCallback } from 'react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const handlerTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);
  return (
    <nav className="flex font-medium gap-7 font-display invisible md:visible">
      <a
        className="text-black dark:text-white  hover:text-blue-300 dark:hover:text-blue-300"
        href="#sobre"
      >
        Sobre
      </a>
      <a
        className="text-black dark:text-white hover:text-blue-300 dark:hover:text-blue-300"
        href="https://github.com/DiogoRocha10"
      >
        <GithubLogo size={32} />
      </a>
      <Lightbulb
        className="cursor-pointer hover:text-blue-300"
        size={32}
        onClick={handlerTheme}
      />
    </nav>
  );
}
