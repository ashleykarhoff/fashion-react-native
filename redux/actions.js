import fetch from "cross-fetch";
import { AsyncStorage } from "react-native";

// AUTHENTICATION ACTIONS
export const SIGNIN = "SIGNIN";
export function signIn(email, password) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/sessions`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(
        resp => resp.json(),
        error => console.log("An error occured ", error)
      )
      .then(json => {
        dispatch(fetchUser(json)).then(() => dispatch(setSession(json)));
      })
      .catch(console.error);
  };
}

export const DELETE_SESSION = "DELETE_SESSION";
export function signOut() {
  return function(dispatch) {
    AsyncStorage.removeItem("session", (err, result) => {
      dispatch({
        type: DELETE_SESSION,
        payload: result
      });
    });
  };
}

export const SET_SESSION = "SET_SESSION";
export function setSession(json) {
  // console.log("setting session: ", json);
  return function(dispatch) {
    AsyncStorage.setItem("session", JSON.stringify({ session: json }), () => {
      AsyncStorage.getItem("session", (err, result) => {
        dispatch({
          type: SET_SESSION,
          payload: result
        });
      });
    });
  };
}

export const GET_SESSION = "GET_SESSION";
export function getSession() {
  return function(dispatch) {
    AsyncStorage.getItem("session", (err, result) => {
      dispatch({
        type: GET_SESSION,
        payload: result
      });
    });
  };
}

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export function createAccount(data) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        first_name: data.firstName,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      })
    })
      .catch(console.error)
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          dispatch(emailTaken(json.error));
        } else {
          dispatch(createBoard(json.id))
            .then(() => dispatch(fetchUser(json.id)))
            .then(() => dispatch(setSession(json.id)));
        }
      });
  };
}

export const EMAIL_TAKEN = "EMAIL_TAKEN";
export function emailTaken(message) {
  return {
    type: EMAIL_TAKEN,
    payload: message
  };
}

export const CREATE_BOARD = "CREATE_BOARD";
export function createBoard(userId, title = "") {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/boards`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        title: title
      })
    })
      .catch(console.error)
      .then(resp => resp.json())
      .then(board => dispatch(saveBoard(board)));
  };
}

export const SAVE_BOARD = "SAVE_BOARD";
export function saveBoard(board) {
  return {
    type: SAVE_BOARD,
    payload: board
  };
}

// USER ACTIONS
export const REQUEST_USER = "REQUEST_USER";
export function requestUser(user) {
  return {
    type: REQUEST_USER,
    user
  };
}

export const RECEIVE_USER = "RECEIVE_USER";
export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    payload: user,
    receivedAt: Date.now()
  };
}

export function fetchUser(userId) {
  return function(dispatch) {
    dispatch(requestUser(userId));
    return fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(
        resp => resp.json(),
        error => console.log("An error occured ", error)
      )
      .then(user => dispatch(receiveUser(user)))
      .catch(console.error);
  };
}

// ITEM ACTIONS
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export function requestItems() {
  return {
    type: REQUEST_ITEMS
  };
}

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export function receiveItems(json) {
  return {
    type: RECEIVE_ITEMS,
    data: json,
    receivedAt: Date.now()
  };
}

export function fetchItems() {
  return function(dispatch) {
    dispatch(requestItems());
    return fetch(`http://localhost:3000/api/v1/items`)
      .then(resp => resp.json())
      .then(json => dispatch(receiveItems(json)))
      .catch(console.error);
  };
}

export const SAVE_ITEM = "SAVE_ITEM";
export function saveItem(item) {
  return {
    type: SAVE_ITEM,
    payload: item
  };
}

export function persistItem(item, boardId) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/board_items`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        board_id: boardId,
        item_id: item.id
      })
    })
      .catch(console.error)
      .then(resp => resp.json())
      .then(item => dispatch(saveItem(item)));
  };
}

export const RECEIVE_SAVED_ITEMS = "RECEIVE_SAVED_ITEMS";
export function receiveSavedItems(items) {
  return {
    type: RECEIVE_SAVED_ITEMS,
    payload: items,
    receivedAt: Date.now()
  };
}
export function getSavedItems(boardId) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/board_items`)
      .then(resp => resp.json())
      .then(json => json.filter(item => item.board_id === boardId))
      .then(items => dispatch(receiveSavedItems(items)))
      .catch(console.error);
  };
}

export const SHOW_ITEM = "SHOW_ITEM";
export function showItem(item) {
  return {
    type: SHOW_ITEM,
    item: item
  };
}

export const RECEIVE_SHOW_ITEM = "RECEIVE_SHOW_ITEM";
export function receiveShowItem(json) {
  return {
    type: RECEIVE_SHOW_ITEM,
    data: json,
    receivedAt: Date.now()
  };
}

export function fetchShowItem(itemId) {
  return function(dispatch) {
    dispatch(showItem(itemId));
    return fetch(`http://localhost:3000/api/v1/board_items/${itemId}`)
      .then(resp => resp.json())
      .then(json => dispatch(receiveShowItem(json)))
      .catch(console.error);
  };
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
}

export function handleDelete(itemId) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/board_items/${itemId}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(item => dispatch(removeItem(item)))
      .catch(console.error);
  };
}

// Backlog of actions to create later:
// FILTER ACTIONS

export const SET_ITEM_FILTER = "SET_ITEM_FILTER";
export const itemFilters = {
  SHOW_ALL: "SHOW_ALL",
  DRESSES: "DRESSES",
  COATS: "COATS"
};
export function setItemFilter(filter) {
  return {
    type: SET_ITEM_FILTER,
    filter
  };
}
