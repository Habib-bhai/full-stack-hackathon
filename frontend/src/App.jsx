import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Competition from "./pages/Competition"
import CompetitionDetails from "./pages/CompetitionDetails"


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Competition" element={<Competition/>}/>
        <Route path="/Competition:competitionName" element={<CompetitionDetails/>}/>
    </Routes>
    </>
  )
}

export default App
