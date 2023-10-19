import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Header from "./components/Header"
import ProtectedRoutes from "./common/ProtectedRoutes"
function App() {
      
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/dashboard"  element={<>
        <Header/>
        <ProtectedRoutes>
          <Dashboard/>
        </ProtectedRoutes>  
        
        </>}/>
        <Route path='/'  element={<Login/>} />
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
