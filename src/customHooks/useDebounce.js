import { useEffect, useState } from 'react';

function useDebounce(value, timeout = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, timeout]);

  return debouncedValue;
}

export default useDebounce;
