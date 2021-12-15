import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import App from './pages/App';

// Other
import * as serviceWorker from './serviceWorker';

// Styles
import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
serviceWorker.unregister();
