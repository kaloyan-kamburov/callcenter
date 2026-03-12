import { createContext, useContext, useState, useCallback } from "react";

type OnCallContextValue = {
  isOnCall: boolean;
  toggleOnCall: () => void;
};

const OnCallContext = createContext<OnCallContextValue | null>(null);

export function OnCallProvider({ children }: { children: React.ReactNode }) {
  const [isOnCall, setIsOnCall] = useState(false);

  const toggleOnCall = useCallback(() => {
    setIsOnCall((prev) => !prev);
  }, []);

  return (
    <OnCallContext.Provider value={{ isOnCall, toggleOnCall }}>
      {children}
    </OnCallContext.Provider>
  );
}

export function useOnCall() {
  const ctx = useContext(OnCallContext);
  return ctx;
}
