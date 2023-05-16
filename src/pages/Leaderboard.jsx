import { Outlet } from 'react-router-dom'

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Outlet />
    </div>
  )
}
export default Leaderboard
