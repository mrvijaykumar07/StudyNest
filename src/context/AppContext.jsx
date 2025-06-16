// context/AppContext.js
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonths, setSelectedMonths] = useState("1");
  const [areaName, setAreaName] = useState(""); // 👈 Add this

  return (
    <AppContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedMonths,
        setSelectedMonths,
        areaName,
        setAreaName, // 👈 Add setter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
