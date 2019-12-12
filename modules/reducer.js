import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  savedItems: [],
  viewItem: undefined
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.type.SAVE_ITEM:
      return { items: state.items.push(item) };

    default:
      return state;
  }
};

export default reducer;
