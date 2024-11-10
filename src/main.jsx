import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import TwitterFollowCard from './components/TwitterFollowCard/TwitterFollowCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app-container'>
      <strong className='app-tittle'>Who to follow</strong>
      <TwitterFollowCard name="Camila Pereyra" count="@camilapereyra23" img="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8f/8f880418926a401fb69e2251fc6d30fe828930a2_full.jpg"/>
      <TwitterFollowCard name="Nicolas Perez" count="@nicoperez529" img="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c0/c048adfc6e5a831f05e136f62c09622ba9d5ec5a_full.jpg"/>
      <TwitterFollowCard name="Pablo Gutierrez" count="@pablogutierrez456" img="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ca/cad6eb7873818a493f917a9c182c3f3f05965908_full.jpg"/>
      <button className='app-showMore'>Show more</button>
    </div>
  </StrictMode>,
)
