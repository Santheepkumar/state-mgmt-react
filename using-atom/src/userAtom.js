import { atom } from "jotai";

export const userAtom = atom({
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
});
