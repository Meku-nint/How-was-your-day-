import React from "react";
import HomePage from './pages/HomePage'
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAuthentication from "./pages/LoginAuthentication";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/user"element={<User/>}/>
        <Route path="/login"element={<LoginAuthentication/>}/>
        <Route path="*"element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
export default App