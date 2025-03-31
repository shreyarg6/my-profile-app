import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModeProvider } from "./contexts/ModeContext"; 
import { Provider } from 'react-redux';
import store from './reducers/store';

// createRoot(document.getElementById("root")).render(
//     // <StrictMode>
//   <StrictMode>
//     <ModeProvider>
//       <App />
//     </ModeProvider>
//   </StrictMode>
//     // </StrictMode>

// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);