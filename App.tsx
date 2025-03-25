import React from 'react';
import Navigation from './src/navigation/NavigationBuilder';
import {Provider} from 'react-redux';
import {store, persisteStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisteStore}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
