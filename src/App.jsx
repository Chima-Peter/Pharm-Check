import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
   return (
      // Render the basename based on enviroment we're running on
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Pharm-Check/'}>
         <Routes>
            <Route path="" element="" />
         </Routes>
      </BrowserRouter>
   )
}

export default App
