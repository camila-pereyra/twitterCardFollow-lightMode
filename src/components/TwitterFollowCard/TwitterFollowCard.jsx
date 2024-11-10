import { useState } from "react"
import "./TwitterFollowCard.css"

const TwitterFollowCard = ({name,count,img}) => {
  const [clicked,setClicked]=useState(false)

  const handleCliked = ()=>{
    setClicked(!clicked)    
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar" 
        src={img} />
        <div className="tw-followCard-nameCount">
          <strong className="tw-followCard-name">{name}</strong>
          <span className="tw-followCard-count">{count}</span>
        </div>
      </header>
      <aside className="tw-followCard-aside">
        <button className={!clicked?"tw-followCard-buttonFollow":"tw-followCard-buttonFollowing"} onClick={handleCliked}>{clicked ?  "Following": "Follow"}</button>
      </aside>
    </article>
  )
}
export default TwitterFollowCard
