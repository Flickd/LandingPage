import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="text-white page-background fontNunitoRegular pb-[300px]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout