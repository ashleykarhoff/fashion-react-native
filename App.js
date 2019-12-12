import React, { Component } from "react";
import Swipe from "./components/swipe";
import ErrorBoundary from "./components/ErrorBoundary";
import TopNav from "./components/TopNav";
// import { Provider as ReduxProvider } from "react-redux";
// import configureStore from "./modules/store";

// const reduxStore = configureStore(window.REDUX_INITAL_DATA);

export default class HelloWorldApp extends Component {
  state = {
    user: [],
    items: [],
    item: [],
    board: []
  };

  handleSave = () => {
    const boardId = this.state.user.boards[0].id;
    const item = this.state.item;
    const boardItems = this.state.board;
    boardItems.push(item);
    this.setState({ board: boardItems });

    fetch("http://localhost:3000/api/v1/board_items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        board_id: boardId,
        item_id: item.id
      })
    });

    this.nextItem();
  };

  nextItem = () => {
    const currentItem = this.state.items.filter(i => i === this.state.item)[0];
    const nextItem = this.state.items[currentItem.id + 1];
    const firstItem = this.state.items[0];

    if (nextItem === undefined) {
      this.setState({ item: firstItem, saveItem: undefined });
    } else {
      this.setState({ item: nextItem, saveItem: undefined });
    }
  };

  getUserData() {
    fetch("http://localhost:3000/api/v1/users/1")
      .then(resp => resp.json())
      .then(data => this.setState({ user: data }));
  }

  getItems() {
    fetch("http://localhost:3000/api/v1/items")
      .then(resp => resp.json())
      .then(items => this.setState({ items: items, item: items[0] }));
  }

  componentDidMount() {
    this.getUserData();
    this.getItems();
  }

  render() {
    return (
      <ErrorBoundary>
        {/* <ReduxProvider store={reduxStore}> */}
        <TopNav />
        <Swipe state={this.state} handleSave={this.handleSave} />
        {/* </ReduxProvider> */}
      </ErrorBoundary>
    );
  }
}
