import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDark = (initialValue) => {
  const [darkValue, setDarkValue] = useLocalStorage("darkMode", initialValue);
  const handleChangeDark = (updatedValue) => setDarkValue(updatedValue);

  useEffect(() => {
    let dC = document.body.classList;
    darkValue === true ? dC.add('dark-mode') : dC.remove('dark-mode');
  }, [darkValue]);

  return [darkValue, setDarkValue, handleChangeDark];
};