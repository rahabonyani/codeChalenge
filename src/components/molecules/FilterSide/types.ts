import type { ChangeEventHandler } from "react";

export type FilterSideProps = {
  value: string;
  onChangeValue: ChangeEventHandler<HTMLInputElement>;
  setCheckedItems: ChangeEventHandler<HTMLInputElement>;
  checkedItems: boolean;
};
