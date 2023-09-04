import {store} from "./store";
import {Provider} from "react-redux";

import React from 'react';
import {UserList} from "./components/UserList";
import {TodoList} from "./components/TodoList";

function App() {
  return (
      <Provider store={store}>
        <UserList/>
          <hr/>
          <TodoList/>
      </Provider>

  );
}

export default App;
