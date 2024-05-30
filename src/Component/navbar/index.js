import './index.css'
const Navbar = props => {
  const {gameTimer, gameScore} = props

  return (
    <li className="nav-container">
      <img
        className="app-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="time-score-container">
        <p>score:{gameScore}</p>
        <div className="timer-container">
          <img
            className="timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{gameTimer} sec</p>
        </div>
      </div>
    </li>
  )
}
export default Navbar
