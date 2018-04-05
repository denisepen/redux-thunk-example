import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ItemList from './ItemList';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(ItemList);

if (module.hot) {
  module.hot.accept('./ItemList', () => {
    render(App);
  });
}
