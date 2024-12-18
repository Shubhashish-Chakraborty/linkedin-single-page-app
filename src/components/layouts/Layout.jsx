import {BrowserRouter , Routes , Route , Link , useNavigate , Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export function Layout() { // The general layout for my website!!!
    return(
        <>  
        
            <Header/>

            {/* here all the compos will render as per mentioned in the App.jsx routing */}
            <div style={{height: "80vh"}}>
                <Outlet/>
            </div>
            
            <Footer/>
        </>
    )
}