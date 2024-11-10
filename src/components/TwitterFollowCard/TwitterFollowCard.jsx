import "./TwitterFollowCard.css"

const TwitterFollowCard = ({name,count,img}) => {
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
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  )
}
export default TwitterFollowCard
