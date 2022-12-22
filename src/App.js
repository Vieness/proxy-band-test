import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Albums from "./features/albums/Albums";
import Posts from "./features/posts/Posts";
import HomePage from "./features/homePage/HomePage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path={'/'} element={<HomePage/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
