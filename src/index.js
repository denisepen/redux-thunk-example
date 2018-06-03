import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(ItemList);

if (module.hot) {
  module.hot.accept('./components/ItemList', () => {
    render(App);
  });
}
