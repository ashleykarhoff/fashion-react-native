import fetch from "cross-fetch";
// Action constants
export const INVALIDATE_REQUEST = "INVALIDATE_REQUEST";
export function invalidateRequest(request) {
  return {
    type: INVALIDATE_REQUEST,
    request
  };
}

export const REQUEST_USER = "REQUEST_USER";
export function requestUser(user) {
  return {
    type: REQUEST_USER,
    user
  };
}

export const RECEIVE_USER = "RECEIVE_USER";
export function receiveUser(user, json) {
  return {
    type: RECEIVE_USER,
    user,
    data: json,
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
      .then(json => dispatch(receiveUser(userId, json)));
  };
}

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
      .then(json => dispatch(receiveItems(json)));
  };
}

export const SAVE_ITEM = "SAVE_ITEM";
export function saveItem(item) {
  return {
    type: SAVE_ITEM,
    item
  };
}

export function persistItem(item, userId) {
  return function(dispatch) {
    return (
      fetch(`http://localhost:3000/api/v1/board_items`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          board_id: userId,
          item_id: item.id
        })
      })
        .then(resp => resp.json())
        // .then(console.log);
        .then(item => dispatch(saveItem(item)))
    );
  };
}

export const RECEIVE_SAVED_ITEMS = "RECEIVE_SAVED_ITEMS";
export function receiveSavedItems(json) {
  return {
    type: RECEIVE_SAVED_ITEMS,
    data: json,
    receivedAt: Date.now()
  };
}
export function getSavedItems() {
  return function(dispatch) {
    return fetch(`http://localhost:3000/api/v1/board_items`)
      .then(resp => resp.json())
      .then(items => items.filter(item => item.board_id === 1))
      .then(json => dispatch(receiveSavedItems(json)));
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
      .then(json => dispatch(receiveShowItem(json)));
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
      .then(item => dispatch(removeItem(item)));
  };
}

// Backlog of actions to create later:

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
