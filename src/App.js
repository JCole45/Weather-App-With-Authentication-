import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './components/Auth';



class App extends React.Component {



  render() {

  return (
    <AuthProvider>
    <Router>
    <div className="App">
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Home} />


    </div>
    </Router>
    </AuthProvider>
  );
  }
}


export default App;