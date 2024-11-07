import { create } from "zustand";

interface PageNumberStore {
  currentPage: number;
  changeCurrentPage: (input: number) => void;
}

const usePageNumber = create<PageNumberStore>()((set) => ({
  currentPage: 1,
  changeCurrentPage: (input) =>
    set((state) => ({
      currentPage: input,
    })),
}));

export default usePageNumber;
