import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
// import RoomPage from './pages/Room.jsx'
// import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <AppContextProvider>
        <App />
      </AppContextProvider>
    
    
  </BrowserRouter>,
)
