import React, { Component } from "react";
import Swipe from "./components/swipe";
import ErrorBoundary from "./components/ErrorBoundary";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Swipe />
      </ErrorBoundary>
    );
  }
}
