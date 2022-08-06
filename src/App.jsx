import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/HomeView"
import AboutView from "./views/AboutView"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App font-[Rubik] text-slate-900 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/why" element={<AboutView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
