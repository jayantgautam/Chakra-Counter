"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type CounterContextValue = {
  count: number;
  increment: () => number;
  reset: () => void;
};

const CounterContext = createContext<CounterContextValue | null>(null);

type CounterProviderProps = {
  children: React.ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    let nextCount = 0;

    setCount((currentCount) => {
      nextCount = currentCount + 1;
      return nextCount;
    });

    return nextCount;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const value = useMemo(
    () => ({
      count,
      increment,
      reset,
    }),
    [count, increment, reset]
  );

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider.");
  }

  return context;
}
