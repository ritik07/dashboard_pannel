import * as actionTypes from "./actionTypes";

export const setTest = (data: number) => {
  return (dispatch: Function) => {
    dispatch({
      type: actionTypes.SET_TEST, // Use the imported action type as the 'type' property
      payload: data,
    });
  };
};
