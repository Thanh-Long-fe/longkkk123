// src/layouts/ClientLayout.tsx
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function ClientLayout() {
    return (
        <div>
            <div className='fixed'  style={{ left: "10px", top: "5px"}}>
            <Link to={'/'}>
            <img src="images/customer.png" alt="" />
            </Link>
            </div>
            <div className='fixed' style={{ right: "10px", top: "5px"}}>
            <Link to={'/'}>
            <img src="images/customer.png" alt="" />
            </Link>
            </div>
            <div className="xl:mx-[20%] min-h-[100vh] px-4 lg:mx-[10%]" style={{background: "#ffffff"}}>
                <Header/>

                <main>
                    <Outlet />
                </main>
                <footer>

                </footer>
            </div>
        </div>
    )
}
