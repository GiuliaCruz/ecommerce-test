import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      {/*NavBar*/}
      {/*SideDrawer*/}
      {/*Backdrop*/}
      <main>
        <Switch>
          <Route exact path ="/" Component={HomeScreen}/>
          <Route exact path="/product/:id"Component={ProductScreen}/>
          <Route exact path="/cart"Component={CartScreen}/>
        </Switch>
      </main>
     Hello mate
    </Router>
  );
}

export default App;
