import { Route, Routes } from "react-router-dom";
import Home from "../../NewHomepage/components/Home";
import MainPage from "../../ProductComponent/MainPage";
import Description from "../../ProductDetail/Description";
import Cart from "../../CartPage/Cart";
import Payment from "../../PaymentPage/Payment";
import PaymentSuccess from "../../PaymentPage/PaymentSuccess";
import SignIn from "../../SignIn/SignIn";

export const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productshoe" element={<MainPage/>}  />
      <Route path="/description" element={<Description/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/done" element={<PaymentSuccess/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
       </Routes>
    
    </>
  );
};
