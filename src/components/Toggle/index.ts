export type TOption = {
  checked?: boolean;
  id: string;
  text: string;
};

export type TToggle = {
  correct: boolean;
  id: string;
  options: Array<TOption>;
};

export { Toggle } from "./Toggle";
