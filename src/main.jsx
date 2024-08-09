import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const BaseContext = createContext<Context>('/Pharm-Check/')
// Create context for specifying base name for both dev and prod mode so image paths render correctly.


// Check to see if we're running in dev or prod mode and set base name to equally point to correct enum value
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BaseContext.Provider value={import.meta.env.DEV ? '/' : '/Pharm-Check/'}>
         <App />
      </BaseContext.Provider>
   </React.StrictMode>
)

const useBaseContext = () => useContext(BaseContext)
// Export the useBaseContext to be used in files easily