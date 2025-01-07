import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchItems from "../Components/FetchItems";




function App() {

  return (
    <>
  <Header/> 
  <FetchItems></FetchItems>
  <Outlet/>
  <Footer/>

    </>
  )
}

export default App;
