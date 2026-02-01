import { useTheme } from '../../../hooks/useTheme';
import './ThemeToggle.css'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <button 
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme == 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === 'light' ? <span>☀️</span> : <span></span>}
        </div>
      </div>
      <span className="theme-toggle-label">
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};


export default ThemeToggle;