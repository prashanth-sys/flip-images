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

        <ul className="flip-game-rules-list-container">
          <li>
            When the game is started, the users should be able to see the list
            of Cards that are shuffled and turned face down.
          </li>

          <li>
            When a user starts the game, the user should be able to see the
            Timer running.
          </li>

          <li>The Timer starts from 2 Minutes.</li>

          <li>
            If the two cards have the same image, they remain face up. If not,
            they should be flipped face down again after a short 2 seconds.
          </li>

          <li>Users should be able to compare only two cards at a time.</li>

          <li>
            When the user is not able to find all the cards before the timer
            ends then the game should end and redirect to the Time Up Page.
          </li>

          <li>
            If the user finds all the matching cards before the timer ends, then
            the user should be redirected to the results page.
          </li>
        </ul>
      </div>
    </div>
  </Modal>
)

export default RulesModal
