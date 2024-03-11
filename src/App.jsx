import Todos from "./components/ToDos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<ToDos />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;