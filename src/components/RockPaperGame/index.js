import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdArrowBack} from 'react-icons/io'
import GamePopup from '../GamePopup'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSOR',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperGame extends Component {
  state = {
    count: 0,
    isShow: true,
    selectedImage: null,
    opponentImage: null,
    result: null,
    resultAlt: '',
    isModelOpen: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const {result} = this.state
    if (prevState.result !== result && result !== null) {
      this.updateScore()
    }
  }

  onClickResultsView = image => {
    const opponentImage = this.getRandomOpponentImage()
    const result = this.determineResult(image, opponentImage)
    let resultAlt = ''

    if (result === 'YOU WON') {
      resultAlt = 'opponent choice'
    } else if (result === 'IT IS DRAW') {
      resultAlt = 'draw'
    } else {
      resultAlt = image.id.toLowerCase()
    }

    this.setState({
      isShow: false,
      selectedImage: image,
      opponentImage,
      result,
      resultAlt, // Set the state to store the alt attribute value for the result image
    })
  }

  getRandomOpponentImage = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    return choicesList[randomIndex]
  }

  closePopup = () => {
    this.setState({
      isShow: true,
      selectedImage: null,
      opponentImage: null,
      result: null,
    })
  }

  onClickPlayAgain = () => {
    this.setState({
      isShow: true,
      selectedImage: null,
      opponentImage: null,
      result: null,
    })
  }

  determineResult = (selectedImage, opponentImage) => {
    if (selectedImage.id === opponentImage.id) {
      return 'IT IS DRAW'
    }
    if (
      (selectedImage.id === 'ROCK' && opponentImage.id === 'SCISSOR') ||
      (selectedImage.id === 'PAPER' && opponentImage.id === 'ROCK') ||
      (selectedImage.id === 'SCISSOR' && opponentImage.id === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  updateScore = () => {
    const {count, result} = this.state
    if (result === 'YOU WON') {
      this.setState({count: count + 1})
    } else if (result === 'YOU LOSE') {
      this.setState({count: count - 1})
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModelOpen: !prevState.isModelOpen,
    }))
  }

  render() {
    const {
      isModelOpen,
      count,
      isShow,
      selectedImage,
      opponentImage,
      result,
      resultAlt,
    } = this.state

    return (
      <div className="bg-container">
        <div className="rock-rules-card">
          <div className="white">
            <Link to="/rock-paper-scissor" className="link">
              <button className="rock-back-button" type="button">
                <IoMdArrowBack />
                <p className="arrow-back">Back</p>
              </button>
            </Link>
          </div>

          <GamePopup isOpen={isModelOpen} onClose={this.toggleModal} />

          <button
            className="game-rules-button"
            type="button"
            onClick={this.toggleModal}
          >
            Rules
          </button>
        </div>

        <h1 className="rock-heading">ROCK PAPER SCISSOR</h1>
        <div className="card-container">
          <div className="heading-container">
            <h1 className="game-name">
              ROCK <br />
              PAPER <br />
              SCISSORS
            </h1>
          </div>
          <div>
            {result && (
              <div className="result-emoji-show-case">
                {result === 'YOU WON' && (
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713252943/Emoji_1_lwlqgm.png"
                    alt="Smiling face with star eyes"
                    className="result-emoji-show"
                  />
                )}
                {result === 'IT IS DRAW' && (
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713253421/Vector_2_mfxirc.png"
                    alt="Face without mouth"
                    className="result-emoji-show"
                  />
                )}
                {result === 'YOU LOSE' && (
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713253521/Emoji_2_acby57.png"
                    alt={resultAlt}
                    className="result-emoji-show"
                  />
                )}
              </div>
            )}
          </div>
          <div className="score-container">
            <p className="score-heading">score</p>
            <p className="scores-heading">{count}</p>
          </div>
        </div>
        <h1 className="pick">Let’s pick</h1>
        <div className="test-1">
          {isShow ? (
            choicesList.map((image, index) => (
              <div
                key={image.id}
                className={`image-container ${
                  index === 1 ? 'your-custom-class' : ''
                }`}
              >
                <button
                  type="button"
                  className="game-button"
                  data-testid={`${image.id.toLowerCase()}Button`}
                  onClick={() => this.onClickResultsView(image)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.id.toLowerCase()}
                    className="r-p-s-image"
                  />
                </button>
              </div>
            ))
          ) : (
            <div>
              <div className="game-show-container">
                <div className="game-container">
                  <h1 className="game-heading">YOU</h1>
                  <img
                    src={selectedImage.imageUrl}
                    alt={`${selectedImage.id} choice`}
                    className="selected-image"
                  />
                </div>
                <div className="game-container">
                  <h1 className="game-heading">OPPONENT</h1>
                  <img
                    src={opponentImage.imageUrl}
                    alt={`${opponentImage.id} choice`}
                    className="selected-image"
                  />
                </div>
              </div>
              <div className="play-again-container">
                {result && (
                  <div className="result-emoji-show-case">
                    {result === 'YOU WON' && (
                      <img
                        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713252943/Emoji_1_lwlqgm.png"
                        alt="won emoji"
                        className="result-emoji-show"
                      />
                    )}
                    {result === 'IT IS DRAW' && (
                      <img
                        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713253421/Vector_2_mfxirc.png"
                        alt="draw emoji"
                        className="result-emoji-show"
                      />
                    )}
                    {result === 'YOU LOSE' && (
                      <img
                        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713253521/Emoji_2_acby57.png"
                        alt="lose emoji"
                        className="result-emoji-show"
                      />
                    )}
                  </div>
                )}
                <button
                  type="button"
                  className="playButton"
                  onClick={this.onClickPlayAgain}
                  data-testid="rockButton"
                >
                  PLAY AGAIN
                </button>
                {result && <p className="game-result">{result}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RockPaperGame
