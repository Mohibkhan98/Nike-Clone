import logo from "./logo.svg";
import "./App.css";
import Product from "./ProductComponent/Product";
import MainPage from "./ProductComponent/MainPage";
import Navbar from "./NewHomepage/components/Navbar";
import Footer from "./NewHomepage/components/Footer";
import { Router } from "./AllRoutes/routes/Allroutes";
import Home from "./NewHomepage/components/Home";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <div className="App">
     
      <Navbar />

      <Router />

      <Footer />
    </div>
  );
}

export default App;
