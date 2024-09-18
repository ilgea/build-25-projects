import { useState } from "react";
import { useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // örneğin, key lightTheme, defaultValue false olabilir
  const [value, setValue] = useState(() => {
    // localStorage'da key varsa onu döndür yoksa defaultValue döndür
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
