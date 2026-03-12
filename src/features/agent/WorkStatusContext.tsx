import { createContext, useContext, useState, useCallback } from "react";
import { getAgentSettings } from "./agentSettings";

type WorkStatusContextValue = {
  status: string | undefined;
  setStatus: (status: string | undefined) => void;
};

const WorkStatusContext = createContext<WorkStatusContextValue | null>(null);

export function WorkStatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatusState] = useState<string | undefined>(
    () => getAgentSettings().status,
  );

  const setStatus = useCallback((newStatus: string | undefined) => {
    setStatusState(newStatus);
  }, []);

  return (
    <WorkStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </WorkStatusContext.Provider>
  );
}

export function useWorkStatus() {
  const ctx = useContext(WorkStatusContext);
  return ctx;
}
