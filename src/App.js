
import './App.css';

import AuthProvider from './context/AuthProvider';

import Home from './components/Home/Home';
import AddDestination from './components/AddDestination/AddDestination';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Order from './components/Order/Order';
import MyOrders from './components/My Orders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FAQ from './components/FAQ/FAQ';



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
          <Route path="/faq">
            <FAQ></FAQ>
          </Route>
          
          <PrivateRoute path="/addDestination">
            <AddDestination></AddDestination>
          </PrivateRoute>
          <PrivateRoute path="/booking/:bookingId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        </Router> 
        
      </AuthProvider>
      
      
    
    </div>
  );
}

export default App;
