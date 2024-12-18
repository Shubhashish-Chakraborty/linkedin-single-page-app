import {BrowserRouter , Routes , Route , Link} from "react-router-dom";
import { Layout } from "./components/layouts/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

// Navbar Routes components!
import Home from "./components/NavbarRoutes/Home.jsx";
import MyNetwork from "./components/NavbarRoutes/MyNetwork.jsx";
import Jobs from "./components/NavbarRoutes/Jobs.jsx";
import Messaging from "./components/NavbarRoutes/Messaging.jsx";
import Notifications from "./components/NavbarRoutes/Notifications.jsx";


export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/mynetwork" element={<MyNetwork/>}/>
                        <Route path="/jobs" element={<Jobs/>}/>
                        <Route path="/messaging" element={<Messaging/>}/>
                        <Route path="/notifications" element={<Notifications/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}