import { useEffect, useState } from "react";

const useDebounce = (value, delay, callBack = () => {}) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      callBack();
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, callBack]);

  return debounceValue;
};

export default useDebounce;
