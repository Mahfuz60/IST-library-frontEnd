import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import CseBook from "./Component/Books/CseBook/CseBook";
import BbaBook from "./Component/Books/BbaBook/BbaBook";
import EceBook from "./Component/Books/EceBook/EceBook";
import NotFound from "./Component/notFound/NotFound";
import Books from "./Component/Books/Books";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/books" element={<Books></Books>}></Route>
          <Route path="books/eceBooks" element={<EceBook></EceBook>} />
          <Route path="books/cseBooks" element={<CseBook></CseBook>} />
          <Route path="books/bbaBooks" element={<BbaBook></BbaBook>} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
