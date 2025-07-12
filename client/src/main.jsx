import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>

    <UserProvider>
      <App />
    </UserProvider>
    
    </GoogleOAuthProvider>;
  </StrictMode>,
)
