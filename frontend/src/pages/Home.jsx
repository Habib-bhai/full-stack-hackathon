import Navbar from '../../components/Navbar';
import AboutUs from  '../Pages/About';
import Competition from '../Pages/Competition';
import Contact from '../Pages/Contact'

import logo from '/logo.png';
function Home() {
  return (
    <>
    <div>

      <p className='test-white text-center bg-blue-800  '>50% Discount for next 24 Hours!! Hurry Up!</p>
      <Navbar />
      <AboutUs />
      <Competition/>
      <Contact />
      <div>
        
        <img src={logo} alt='logo' height={500} width={500}/>
        <div>
          <p className=''>upcoming new event 2024</p>
        </div>
      </div>

    </div>
    {/* <Navbar /> */}
    </>

  )
}

export default Home;