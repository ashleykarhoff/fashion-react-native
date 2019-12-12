// Types of actions
const Types = {
  GET_ITEMS: "GET_ITEMS",
  SAVE_ITEM: "SAVE_ITEM",
  // SKIP_ITEM: "SKIP_ITEM",
  VIEW_ITEM: "VIEW_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};

// actions
const getItems = items => ({
  type: Types.GET_ITEMS,
  payload: items
});

const saveItem = item => ({
  type: Types.SAVE_ITEM,
  payload: item
});

const viewItem = item => ({
  type: Types.VIEW_ITEM,
  payload: item
});

const deleteItem = item => ({
  type: Types.DELETE_ITEM,
  payload: item
});
