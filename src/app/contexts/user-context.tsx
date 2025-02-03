"use client";

import { createContext, useState, useContext } from "react";

interface UserContextType {
  user_id: number | null;
  setUser: React.Dispatch<React.SetStateAction<number | null>>;
}

// Create context without an initial value (undefined by default)
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user_id, setUser] = useState<number | null>(null);

  return (
    <UserContext.Provider value={{ user_id, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
