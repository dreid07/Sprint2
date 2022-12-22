/*imports*/
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
import Error from "./pages/error";

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return(
    /*the routign setup*/
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Feed" element={<Home/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
  return <Home/>
}

export default App;
