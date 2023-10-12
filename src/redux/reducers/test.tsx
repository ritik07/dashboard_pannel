import * as actionTypes from "../actions/actionTypes";

const initalState = {
  test: 1,
};

export const test = (state = initalState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_TEST:
      return { test: action.payload };

    default:
      return state;
  }
};
