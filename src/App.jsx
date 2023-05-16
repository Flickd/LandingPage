import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'

import Events from './pages/news/Events'
import Patchnotes from './pages/news/Patchnotes'
import Community from './pages/news/Community'
import Leaderboard from './pages/Leaderboard'
import LeaderboardGeneral from './components/leaderboard/LeaderboardGeneral'
import Player from './components/leaderboard/Player'
import Alliances from './components/leaderboard/Alliances'
import Shop from './pages/Shop'

function App() {
  return (
    <>
      <Routes>
        <Route path="/LandingPage/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="news/" element={<News />}>
            <Route path="events/" element={<Events />} />
            <Route path="patchnotes/" element={<Patchnotes />} />
            <Route path="community/" element={<Community />} />
          </Route>
          <Route path="leaderboard/" element={<Leaderboard />}>
            <Route index element={<LeaderboardGeneral />} />
            <Route path="player/" element={<Player />} />
            <Route path="alliance/" element={<Alliances />} />
          </Route>
          <Route path="shop/" element={<Shop />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
