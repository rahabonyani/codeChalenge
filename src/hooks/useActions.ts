import { Dispatch, bindActionCreators } from "redux";

import { useDispatch } from "react-redux";
import { useMemo } from "react";

/**
 * Actions can only accept one param if there are more you need to
 * pass the params as object
 * */
type Actions = <T>(actions: Array<(...args: T[]) => (dispatch: Dispatch, getState?: () => any) => Promise<any>>) => Array<(...args: T[]) => any>;

export const useActions: Actions = (actions) => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return actions.map((a) => bindActionCreators(a, dispatch));
  }, [actions, dispatch]);
};
