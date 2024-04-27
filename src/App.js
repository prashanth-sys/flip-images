import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import MemoryMatrix from './components/MemoryMatrix'
import MatrixHomePage from './components/MatrixHomePage'

import FlipHome from './components/FlipHome'
import FlipGame from './components/FlipGame'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/memory-matrix" component={MatrixHomePage} />
    <Route exact path="/matrix/game" component={MemoryMatrix} />
    <Route exact path="/card-flip-memory-game" component={FlipHome} />
    <Route exact path="/flip-game" component={FlipGame} />
  </Switch>
)

export default App
