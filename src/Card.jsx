import ProfilePic from "./assets/profile.jpg"
function Card(){
  return(
    <div className="card">
      <img className="card-image" src={ProfilePic} alt="profile picture" />
      <h1 className="card-title">Mrks code</h1>
      <p className="card-text">I am making youtube video and plaing video game</p>
    </div>
  )
}
export default Card