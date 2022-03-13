import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Game } from './features/game/Game';
import './App.css';
import { store } from './app/store';
import { persistStore } from 'redux-persist';

function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <div className="App">
          <header className="App-header">
          </header>
        </div> */}
        <Game />
      </PersistGate>
    </Provider>
  );
}

export default App;
