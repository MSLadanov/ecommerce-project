import { create } from "zustand";

interface ISearchState {
  search: string;
  setSearch: (searchQuery: string) => void
}

export const useSearch = create<ISearchState>((set) => ({
  search: "",
  setSearch: (searchQuery: string) =>
    set({
      search: searchQuery,
    }),
}));
