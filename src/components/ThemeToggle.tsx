
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme"
      className="rounded-full h-9 w-9 border-none bg-transparent hover:bg-secondary/20"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
