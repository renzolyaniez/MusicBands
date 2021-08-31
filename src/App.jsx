import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom' 
import Login from './components/Login'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import MusicBands from './components/MusicBands'
import Albums from './components/Albums'
import { useStateValue } from './StateProvider'



function App() {
  const [{ usuario }, dispatch] = useStateValue()


  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path='/Home' component={Home}></Route>
          {
            usuario ? (
              <div>
                <Route path='/Admin' component={Admin}></Route>
                <Route path='/MusicBands' component={MusicBands}></Route>
                <Route path='/Albums' component={Albums}></Route>
              </div>
            ) :
              (
                <div>
                  <Route exact path='/' component={Login}></Route>
                </div>

              )
          }

        </Switch>
      </Router>
    </div>

  );
}

export default App;
