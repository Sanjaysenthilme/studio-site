// import NavBar from './Components/NavBar';
import "./App.css"
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
