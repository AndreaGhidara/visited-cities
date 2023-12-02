
// import { motion } from "framer-motion";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {


  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="h-full bg-slate-300 overflow-y-auto p-3">
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
