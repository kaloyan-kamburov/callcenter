import { createContext, useContext, useState, useCallback } from "react";

type AgentWorkLogContextValue = {
  isSettingWorkLog: boolean;
  setIsSettingWorkLog: (value: boolean) => void;
};

const AgentWorkLogContext = createContext<AgentWorkLogContextValue | null>(null);

export function AgentWorkLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSettingWorkLog, setIsSettingWorkLog] = useState(false);

  const setValue = useCallback((value: boolean) => {
    setIsSettingWorkLog(value);
  }, []);

  return (
    <AgentWorkLogContext.Provider
      value={{ isSettingWorkLog, setIsSettingWorkLog: setValue }}
    >
      {children}
    </AgentWorkLogContext.Provider>
  );
}

export function useAgentWorkLog() {
  const ctx = useContext(AgentWorkLogContext);
  return ctx;
}
