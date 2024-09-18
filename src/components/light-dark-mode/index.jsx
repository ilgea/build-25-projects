import "./styles.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);
  // data-theme, theme'i baz alarak light ya da dark class'ını ekler
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToogleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
