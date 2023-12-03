import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import TeamDetail from "./components/TeamDetail.jsx";
import NotFound from "./components/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTeam from "./components/AddTeam.jsx";
function App() {

    return (
        <Router>
            <Layout>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams/:teamId" element={<TeamDetail />} />
                    <Route path="/teams/add" element={<AddTeam />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
