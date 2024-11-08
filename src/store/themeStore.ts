// global state management for theme
import { create } from "zustand";

interface ThemeStore {
  theme: string | null;
  changeTheme: (input: string) => void;
}

const useTheme = create<ThemeStore>()((set) => ({
  theme: null,
  changeTheme: (input) =>
    set((state) => ({
      theme: input,
    })),
}));

export default useTheme;
