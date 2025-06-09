// src/layouts/ClientLayout.tsx
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import FlightLinks from '../components/FlightLinks/FlightLinks'
import Footer from '../components/Footer/Footer'

export default function ClientLayout() {
    return (
        <div>
            <div className='fixed lg:block hidden'  style={{ left: "10px", top: "5px"}}>
            <Link to={'/'}>
            <img src="images/customer.png" alt="" />
            </Link>
            </div>
            <div className='fixed lg:block hidden' style={{ right: "10px", top: "5px"}}>
            <Link to={'/'}>
            <img src="images/customer.png" alt="" />
            </Link>
            </div>
            <div className="xl:mx-[15%] min-h-[100vh] px-4 lg:mx-[10%] md:mx-[0px]" style={{background: "#ffffff"}}>
                <Header/>
                <main>
                    <Outlet />
                </main>
                <div>
                    <FlightLinks/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    )
}
