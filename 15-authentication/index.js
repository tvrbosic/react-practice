import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContextProvider API_KEY={API_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
