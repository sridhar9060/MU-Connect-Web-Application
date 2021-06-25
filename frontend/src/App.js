
import React from "react"
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Viewnews from './pages/Viewnews';
import Editor from './pages/Editor';
import Signup from "./pages/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import PrivateRoute from "./pages/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import Footer from './components/Footercomponent/Footer';
import Mentor from "./pages/mentor"
function App() {
  return (
        <Router>
        <Navbar />
          <AuthProvider>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about-us' component={AboutUs} />
              <Route path='/news' component={Viewnews} />
              <PrivateRoute path="/editor" component={Editor} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/mentor" component={Mentor} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
          <Footer />
        </Router>

  )
}

export default App
