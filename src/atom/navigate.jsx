import { atom } from "recoil";

export const usePageNumberState = atom({
  key: "pageNumber",
  default: 1,
});
