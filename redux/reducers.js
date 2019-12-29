import {
  INVALIDATE_REQUEST,
  REQUEST_USER,
  RECEIVE_USER,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  itemFilters,
  SET_ITEM_FILTER,
  SAVE_ITEM,
  REMOVE_ITEM,
  RECEIVE_SAVED_ITEMS,
  SET_SESSION,
  SHOW_ITEM,
  RECEIVE_SHOW_ITEM
} from "./actions";
import { combineReducers } from "redux";

function session(
  state = {
    sessionId: undefined
  },
  action
) {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, session: action.payload };

    default:
      return state;
  }
}

function user(
  state = {
    isFetching: false,
    didInvalidate: false,
    user: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_REQUEST:
      return Object.assign({}, state, {
        didInvalidate: true
      });

    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        user: action.data,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}

function items(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_REQUEST:
      return Object.assign({}, state, {
        didInvalidate: true
      });

    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        allItems: action.data,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}

function itemFilter(state = itemFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_ITEM_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function savedItems(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case SAVE_ITEM:
      return { ...state, items: state.items.push(action.item) };

    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(i => i !== action.payload) };

    case RECEIVE_SAVED_ITEMS:
      return { ...state, items: action.data };

    default:
      return state;
  }
}

function showItem(
  state = {
    item: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_SHOW_ITEM:
      return { ...state, item: action.data };

    default:
      return state;
  }
}

const reducers = combineReducers({
  session,
  user,
  items,
  itemFilter,
  savedItems,
  showItem
});

export default reducers;
