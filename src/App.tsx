import React from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import MoodWithIconSwitch from './components/MoodWithIconSwitch';

const App: React.FC = () => {
  const { theme } = useTheme();

  // Determine the theme classes based on the current theme
  const themeClass = {
    light: 'tw-bg-light-50 tw-text-black',
    dark: 'tw-bg-dark-500 tw-text-white' ,
    pink: 'tw-bg-pink-bg tw-text-pink-text',
    purple: 'tw-bg-purple-bg tw-text-purple-text',
    system: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'tw-bg-dark-500 tw-text-white' : 'tw-bg-light-50 tw-text-light-500'
  }[theme] || 'tw-bg-light-50 tw-text-light-500'; // Default to light theme

  return (
    <>
      <div className={`tw-min-h-screen ${themeClass}`}>
        <MoodWithIconSwitch />
        <h1 className="tw-text-3xl tw-font-bold">Vite + Tailwind + TypeScript - Multi-Theme</h1>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default App;