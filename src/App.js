import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Users from "./features/users";
import Albums from "./features/albums";
import Posts from "./features/posts";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path={'/'} element={<Users/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
