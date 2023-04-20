import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
