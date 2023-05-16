import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <p className="absolute top-[50%] left-[40%]">Page Not Found</p>
      <div className="absolute top-[60%] left-[40%] p-3 bg-[#100020] text-white">
        <Link to={'/LandingPage/'}>Back to home</Link>
      </div>
    </div>
  )
}
export default NotFound
