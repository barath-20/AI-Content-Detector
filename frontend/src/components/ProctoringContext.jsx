iimport { createContext, useState, useContext } from "react";

const ProctoredContext = createContext();

export const ProctoredProvider = ({ children }) => {
  const [videoBlob, setVideoBlob] = useState(null);

  return (
    <ProctoredContext.Provider value={{ videoBlob, setVideoBlob }}>
      {children}
    </ProctoredContext.Provider>
  );
};

export const useProctored = () => useContext(ProctoredContext);
