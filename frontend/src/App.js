import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
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
