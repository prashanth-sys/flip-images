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
        <CgClose className="game-close-popup" />
      </button>

      <div className="rules-content">
        <h1 className="rules">Rules</h1>

        <ul className="rules-list-container">
          <li>
            The game result should be based on user and user opponent choices
          </li>
          <li>
            When the user choice is rock and his opponent choice is rock then
            the result will be <span className="span">IT IS DRAW</span>
          </li>
          <li>
            When the user choice is paper and his opponent choice is rock then
            the result will be <span className="span">YOU WON</span>
          </li>
          <li>
            When the user choice is a scissor and his opponent choice is rock
            then the result will be <span className="span">YOU LOSE</span>
          </li>
          <li>
            When the user choice is paper and his opponent choice is paper then
            the result will be <span className="span">IT IS DRAW</span>
          </li>
          <li>
            When the user choice is scissors and his opponent choice is paper
            then the result will be <span className="span">YOU WON</span>
          </li>
          <li>
            When the user choice is rock and his opponent choice is scissors
            then the result will be <span className="span">YOU WON</span>
          </li>
          <li>
            When the user choice is paper and his opponent choice is scissors
            then the result will be <span className="span">YOU LOSE</span>
          </li>
          <li>
            When the user choice is scissors and his opponent choice is scissors
            then the result will be <span className="span">IT IS DRAW</span>
          </li>
          <li>
            When the result is <span className="span">YOU WON</span>, then the
            count of the score should be incremented by 1
          </li>
          <li>
            When the result is <span className="span">IT IS DRAW</span>, then
            the count of the score should be the same
          </li>
          <li>
            When the result is <span className="span">YOU LOSE</span>, then the
            count of the score should be decremented by 1.
          </li>
        </ul>
      </div>
    </div>
  </Modal>
)

export default RulesModal
