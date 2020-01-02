import {
  INVALIDATE_REQUEST,
  REQUEST_USER,
  RECEIVE_USER,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  SAVE_ITEM,
  RECEIVE_SAVED_ITEMS,
  SET_SESSION,
  DELETE_SESSION,
  EMAIL_TAKEN,
  SIGNIN_ERROR,
  PASSWORD_ERROR,
  SAVE_BOARD,
  RECEIVE_SHOW_ITEM
} from "./actions";
import { combineReducers } from "redux";

function session(
  state = {
    session: undefined,
    emailTaken: false,
    signInError: false,
    passwordError: false
  },
  action
) {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, session: action.payload };

    case DELETE_SESSION:
      return { ...state, session: undefined };

    case EMAIL_TAKEN:
      return { ...state, emailTaken: action.payload };

    case SIGNIN_ERROR:
      return { ...state, signInError: action.payload };

    case PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };

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
        user: action.payload,
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

function board(
  state = {
    boards: [],
    boardItems: []
  },
  action
) {
  switch (action.type) {
    case SAVE_ITEM:
      return { ...state, boardItems: [...state.boardItems, action.payload] };

    case RECEIVE_SAVED_ITEMS:
      return { ...state, boardItems: action.payload };

    case SAVE_BOARD:
      return { ...state, boards: [...state.boards, action.payload] };

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
  board,
  showItem
});

export default reducers;
