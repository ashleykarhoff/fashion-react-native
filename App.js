import React from "react";
import { Provider } from "react-redux";
import Navigator from "./routes/homeStack";
// import Discovery from "./components/Discovery";
import store from "./redux/store";
// import TopNav from "./components/TopNav";

const App = () => {
  return (
    <Provider store={store}>
      {/* <TopNav /> */}
      <Navigator />
    </Provider>
  );
};
export default App;
