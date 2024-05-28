import React, { useEffect, useState } from "react";

const useDebounce = (value, delay, callBack = () => {}) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      callBack();
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
