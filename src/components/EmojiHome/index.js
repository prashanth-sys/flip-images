import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import './index.css'

const EmojiHome = () => (
  <div className="emoji-home-page-container">
    <div className="emoji-back-button">
      <Link to="/" className="link">
        <button className="emoji-back-icon" type="button">
          <BiArrowBack className="icon" />
          <p className="emoji-back-text">Back</p>
        </button>
      </Link>
    </div>
    <h1 className="emoji-home-heading">Emoji Game</h1>
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572208/Asset_1_4x_1_1_vypqbi.png"
      alt="emoji game"
      className="emoji-home-game-image"
    />
    <h1 className="emoji-home-rules-text">Rules</h1>
    <ul className="emoji-home-rules-list">
      <li>User should be able to see the list of Emojis</li>
      <li>
        When the user clicks any one of the Emoji for the first time, then the
        count of the score should be incremented by 1 and the List of emoji
        cards should be shuffled.
      </li>
      <li>
        This process should be repeated every time the user clicks on an emoji
        card
      </li>
      <li>
        When the user clicks on all Emoji cards without clicking any of it
        twice, then the user will win the game
      </li>
      <li>
        When the user clicks on the same Emoji for the second time, then the
        user will lose the game.
      </li>
      <li>
        Once the game is over, the user will be redirected to the results page.
      </li>
    </ul>
    <Link to="/emoji-show-game" className="link">
      <button className="emoji-home-start-button" type="button">
        Start playing
      </button>
    </Link>
  </div>
)
export default EmojiHome
