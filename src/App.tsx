import {store} from "./store";
import {Provider} from "react-redux";

import React from 'react';
import {UserList} from "./components/UserList";

function App() {
  return (
      <Provider store={store}>
        <UserList/>
      </Provider>

  );
}

export default App;
