import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Makanan from "./components/Makanan";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/makanan" element={<Makanan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" Component={ItemDetail} />
          <Route path="/login" Component={Login}></Route>
          <Route path="/logout" Component={Logout}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
