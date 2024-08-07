import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
   return (
      <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/repo_name/'}
      >
         <Routes>
            <Route path="" element="" />
         </Routes>
      </BrowserRouter>
   )
}

export default App
