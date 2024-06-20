'use client';
import { useTheme } from './themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Determine if the checkbox should be checked based on the current theme
  const isDarkMode = theme === 'dark';

  return (
    <div className="mt-2 mb-3 p-2 ml-4 flex items-center space-x-2">
      <span>{`Current Theme: ${theme}`}</span>
      <input
        type="checkbox"
        className="toggle toggle-md"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;

