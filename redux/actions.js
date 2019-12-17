import fetch from "cross-fetch";
// Action constants
// export const FETCH_SAVED_ITEMS = "REMOVE_ITEM";
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

export const LOAD_ITEMS = "LOAD_ITEMS";
export function loadItems(items) {
  return {
    type: LOAD_ITEMS,
    items
  };
}

export const SHOW_ITEM = "SHOW_ITEM";
export function showItem(item) {
  return {
    type: SHOW_ITEM,
    item
  };
}

export const SAVE_ITEM = "SAVE_ITEM";
export function saveItem(item) {
  return {
    type: SAVE_ITEM,
    item
  };
}

export const REMOVE_ITEM = "REMOVE_ITEM";
export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item
  };
}

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
