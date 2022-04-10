import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import RootStore from './stores';
import { Provider } from 'mobx-react';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider {...new RootStore()}>
    <App />
  </Provider>
)