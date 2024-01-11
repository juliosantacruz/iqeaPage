import { create } from "zustand";

type TypeUserData = {
  id: number | string;
  name: string;
  company: string;
  isAuth: boolean;
};

interface UserState {
  id: number | string;
  name: string;
  company: string;
  isAuth: boolean;
  setUser: (userData: TypeUserData) => void;
}

export const useUserStore = create<UserState>((set) => ({
  id: "",
  name: "",
  company: "",
  isAuth: false,
  setUser: (userData: TypeUserData) =>
    set({
      id: userData.id,
      name: userData.name,
      company: userData.company,
      isAuth: userData.isAuth,
    }),
}));
