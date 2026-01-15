import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx';
const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
     
        <App />
     
    </AuthProvider>
  </BrowserRouter>,
)
