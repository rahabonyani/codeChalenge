import { Box, Checkbox } from "@chakra-ui/react";
import Input from "components/atoms/Input";
import type { FilterSideProps } from "./types";

const FilterSide = ({ value, onChangeValue, setCheckedItems, checkedItems }: FilterSideProps) => {
  return (
    <Box paddingX={2}>
      <Input
        inputProps={{
          name: "search",
          value: value,
          onChange: onChangeValue,
          placeholder: "Search",
          bg: "white",
        }}
        type="text"
      />
      <Box pt={5}>
        <Checkbox isChecked={checkedItems} onChange={(e) => setCheckedItems(e)}>
          completed
        </Checkbox>
      </Box>
    </Box>
  );
};

export default FilterSide;
