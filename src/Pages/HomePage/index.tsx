import { editTaskAction } from "actions/taskAction";
import FilterSide from "components/molecules/FilterSide";
import TaskContent from "components/templates/TasksContent";
import { taskHeadTable } from "constants/headTable";
import { useActions } from "hooks/useActions";
import { SetStateAction, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import objectFilter from "utils/taskSearch";
import AppShell from "../../components/organisms/AppShell";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [checkedItems, setCheckedItems] = useState(false);
  const { tasksState } = useSelector<any, any>(({ tasks }) => tasks);
  const [filterInputSearch] = useDebounce(searchText, 1000);

  const [editTask] = useActions([editTaskAction]);

  const handleSearch = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchText(event.target.value);
  };

  const handleFilterCompletedTask = (event: { target: { checked: boolean } }) => {
    setCheckedItems(event.target.checked);
  };

  const filteredTask = useMemo(() => {
    const excludeColumns = ["title", "description"];

    return objectFilter({ filterText: filterInputSearch, data: tasksState, excludeColumns: excludeColumns });
  }, [filterInputSearch, tasksState]);
  const filterCompleted = useMemo(() => filteredTask.filter((item) => item.completed === checkedItems), [checkedItems, filteredTask]);

  return (
    <AppShell
      sidebar={<FilterSide value={searchText} onChangeValue={handleSearch} checkedItems={checkedItems} setCheckedItems={handleFilterCompletedTask} />}
      header={undefined}
    >
      <TaskContent
        headTableContent={taskHeadTable}
        bodyTableContent={checkedItems ? filterCompleted : (filteredTask as any)}
        action={{ editTask: editTask }}
      />
    </AppShell>
  );
};

export default HomePage;
