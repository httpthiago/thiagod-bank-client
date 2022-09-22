import Login from "./pages/login/Login";
import AbrirConta from "./pages/abrir-conta/AbrirConta";
import "./pages/login/login.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/abrir-conta" element={<AbrirConta />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
