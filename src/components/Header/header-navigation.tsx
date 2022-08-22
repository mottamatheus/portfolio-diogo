import { useCallback } from 'react';
import { useTheme } from 'next-themes';
import { GithubLogo, Lightbulb } from 'phosphor-react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const handlerTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);
  return (
    <nav className="flex items-center justify-center font-medium gap-7 font-display">
      <a
        className=" text-white dark:text-orange-500  hover:text-black dark:hover:text-white"
        href="#sobre"
      >
        <span>Sobre</span>
      </a>
      <a
        href="https://github.com/DiogoRocha10"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        type="link"
      >
        <GithubLogo
          size={32}
          className="text-white cursor-pointer dark:text-orange-500 hover:text-black dark:hover:text-white"
          alt="GitHub"
        />
      </a>
      <Lightbulb
        className="text-white cursor-pointer dark:text-orange-500 hover:text-black dark:hover:text-white"
        size={32}
        onClick={handlerTheme}
        alt="Tema"
      />
    </nav>
  );
}
