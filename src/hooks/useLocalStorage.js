import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const savedData = localStorage.getItem(key);
  const initialState = savedData ? JSON.parse(savedData) : initialValue;
  const [state, setState] = useState(() => initialState);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(key, data);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
