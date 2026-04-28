import "./App.css";
import { Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";




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



function App() {

  return (
    <>
     
        <ScrollToTop />

        <Header />

        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>

              <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/directory-detail" element={<DirectoryDetail />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/passHolders" element={<PassHolders />} />
              <Route path="/lowdown" element={<Lowdown />} />
              <Route path="/lowdownDetail" element={<LowdownDetail />} />
               
              </Route>
            </Routes>
          </AnimatePresence>
        </main>


        <Footer />
    </>
  );
}

export default App;