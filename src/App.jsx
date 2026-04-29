import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import DirectoryDetail from "./pages/DirectoryDetail";
import Vendors from "./pages/Vendors";
import PassHolders from "./pages/PassHolders";
import Lowdown from "./pages/Lowdown";
import LowdownDetail from "./pages/LowdownDetail";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/directory-detail" element={<DirectoryDetail />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/passHolders" element={<PassHolders />} />
            <Route path="/lowdown" element={<Lowdown />} />
            <Route path="/lowdownDetail" element={<LowdownDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;