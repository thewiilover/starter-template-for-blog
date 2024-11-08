// global state management for current page number in main page
import { create } from "zustand";

interface PageNumberStore {
  currentPage: number;
  totalPageNumbers: number[];
  changeCurrentPage: (input: number) => void;
  changeTotalPageNumbers: (input: number[]) => void;
}

const usePageNumber = create<PageNumberStore>()((set) => ({
  currentPage: 1,
  totalPageNumbers: [],
  changeCurrentPage: (input) =>
    set((state) => ({
      currentPage: input,
    })),
  changeTotalPageNumbers: (input) =>
    set((state) => ({
      totalPageNumbers: input,
    })),
}));

export default usePageNumber;
