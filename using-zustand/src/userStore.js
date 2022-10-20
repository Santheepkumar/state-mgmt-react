import create from "zustand";

const useUser = create((set) => ({
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
  toggleLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
}));

export default useUser;
