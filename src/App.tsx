import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import UserLists from './components/UserLists';
import store from './redux/store/index'

function App() {
  return (
    <ReduxProvider store={store}>
      <UserLists />
    </ReduxProvider>
  );
}

export default App;
