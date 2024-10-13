import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Competition from "./pages/Competition"
import CompetitionDetails from "./pages/CompetitionDetails"
import Contact from "./pages/Contact"
import Footer from "../components/Footer"


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Competition" element={<Competition/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Competition:competitionName" element={<CompetitionDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
