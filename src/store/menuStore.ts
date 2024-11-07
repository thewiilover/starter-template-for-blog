import { create } from "zustand";

interface MenuStore {
  isMobileMenuVisible: boolean;
  updateIsMobileMenuVisible: (input: boolean) => void;
}

const useMenuStore = create<MenuStore>()((set) => ({
  isMobileMenuVisible: false,
  updateIsMobileMenuVisible: (input) =>
    set((state) => ({
      isMobileMenuVisible: input,
    })),
}));

export default useMenuStore;
