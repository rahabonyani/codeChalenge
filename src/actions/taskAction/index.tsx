import { createAction, handleActions } from "redux-actions";
import { Dispatch } from "redux";

interface TaskType {
  title: string;
  description: string;
  completed: boolean;
  id: string;
}

const addTaskGenerateActionType = createAction("REQUEST_ADD_NEW_TASK");

export const addTaskAction = (response: TaskType) => async (dispatch: Dispatch, getState: any) => {
  const prevTasks = getState().tasks.tasksState;
  dispatch(addTaskGenerateActionType([...prevTasks, response]));
};

export const editTaskAction = (response: TaskType) => async (dispatch: Dispatch, getState: any) => {
  const prevTasks = getState().tasks.tasksState;
  const newTasksData = prevTasks.map((item: TaskType) => (item.id === response.id ? response : item));
  dispatch(addTaskGenerateActionType(newTasksData));
};

const initialState = {
  tasksState: [],
};

export const addTaskReducer = handleActions<typeof initialState, any>(
  {
    [addTaskGenerateActionType.toString()]: (state, { payload }) => ({
      ...state,
      tasksState: payload,
    }),
  },
  initialState
);
