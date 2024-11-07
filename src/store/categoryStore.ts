import { create } from "zustand";

interface CategoryStore {
  currentCategory: string;
  changeCurrentCategory: (input: string) => void;
}

const useCategory = create<CategoryStore>()((set) => ({
  currentCategory: "All",
  changeCurrentCategory: (input) =>
    set((state) => ({
      currentCategory: input,
    })),
}));

export default useCategory;
