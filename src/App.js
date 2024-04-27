import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'
import RockPaperHomePage from './components/RockPaperHomePage'
import RockPaperGame from './components/RockPaperGame'
import EmojiHome from './components/EmojiHome'
import EmojiGame from './components/EmojiGame'
import FlipHome from './components/FlipHome'
import FlipGame from './components/FlipGame'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory-matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/rock-paper-scissor" component={RockPaperHomePage} />
    <Route exact path="/rock/paper/game" component={RockPaperGame} />
    <Route exact path="/emoji-game" component={EmojiHome} />
    <Route exact path="/emoji-show-game" component={EmojiGame} />
    <Route exact path="/card-flip-memory-game" component={FlipHome} />
    <Route exact path="/flip-game" component={FlipGame} />
  </Switch>
)

export default App
