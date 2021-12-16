import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import CseBook from "./Component/Books/CseBook/CseBook";
import BbaBook from "./Component/Books/BbaBook/BbaBook";
import EceBook from "./Component/Books/EceBook/EceBook";
import NotFound from "./Component/notFound/NotFound";
import Books from "./Component/Books/Books";
import Register from "./Component/UserAuth/Register/Register";
import Login from "./Component/UserAuth/Login/Login";
import Dashboard from "./Component/Dashboard/DashboardHome/DashboardHome";
import AuthProvider from "./Component/Context/AuthProvider/AuthProvider";
import AddBook from "./Component/Dashboard/AddBook/AddBook";
import MakeAdmin from "./Component/Dashboard/MakeAdmin/MakeAdmin";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/books/allBooks" element={<Books></Books>} />
          <Route path="/books/eceBooks" element={<EceBook></EceBook>} />
          <Route path="/books/cseBooks" element={<CseBook></CseBook>} />
          <Route path="/books/bbaBooks" element={<BbaBook></BbaBook>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/addBooks" element={<AddBook></AddBook>}></Route>
          <Route path="/addAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
