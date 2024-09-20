import React from 'react';
import { Provider } from 'react-redux';
import { CustomRoute } from './routes/custom.routes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <CustomRoute />
    </Provider>
  );
}

export default App;
