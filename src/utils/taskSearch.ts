type ObjectFilterProps = {
  filterText: string;
  data: { [x: string]: any }[];
  excludeColumns?: string[];
};

const objectFilter = ({ filterText = "", data = [], excludeColumns = [] }: ObjectFilterProps) => {
  const lowercaseFilter = filterText.toLowerCase().trim();
  let finalData: { [x: string]: any }[] = [];
  data.forEach((item) => {
    const filterData = excludeColumns.map((key) => item[key].includes(lowercaseFilter) && item);
    const pureData = filterData.filter(Boolean);
    if (pureData[0]) {
      finalData.push(pureData[0]);
    }
  });
  const pureFinalData = finalData.filter(Boolean);

  return pureFinalData;
};

export default objectFilter;
