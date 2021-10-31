
import './App.css';

import AuthProvider from './context/AuthProvider';

import Home from './components/Home/Home';
import AddDestination from './components/AddDestination/AddDestination';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import About from './components/About/About';



function App() {
  return (
    <div className="App">
      <AuthProvider>
    
        <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutUs">
            <About></About>
          </Route>
          <Route path="/addDestination">
            <AddDestination></AddDestination>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
        </Router> 
        
      </AuthProvider>
      
      
    
    </div>
  );
}

export default App;
