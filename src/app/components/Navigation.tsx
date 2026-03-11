import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-lg'
          : 'backdrop-blur-md bg-white/30 dark:bg-gray-900/30'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.18)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition-all duration-300 ${
              isScrolled ? 'text-transparent' : 'text-white drop-shadow-lg'
            }`}
          >
            Portfolio
          </button>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {['home', 'about', 'work', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 relative group ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isScrolled ? 'bg-blue-600 dark:bg-blue-400' : 'bg-white'
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'bg-white/30 dark:bg-gray-800/30 border-white/20 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  : 'bg-white/20 border-white/30 hover:bg-white/30'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon
                  className={`w-5 h-5 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}