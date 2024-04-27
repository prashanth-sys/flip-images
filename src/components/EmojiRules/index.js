// RulesModal.js

import Modal from 'react-modal'

import {CgClose} from 'react-icons/cg'

import './index.css'

const RulesModal = ({isOpen, onClose}) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className="model-container">
    <div className="model">
      <button
        type="button"
        onClick={onClose}
        className="close-button"
        data-testid="close"
      >
        <CgClose className="close-icon" />
      </button>

      <div className="rules-content">
        <h1 className="rules">Rules</h1>

        <ul className="emoji-home-rules-list">
          <li>User should be able to see the list of Emojis</li>
          <li>
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li>
            This process should be repeated every time the user clicks on an
            emoji card
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
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
      </div>
    </div>
  </Modal>
)

export default RulesModal
