import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Home from './components/User/Home';

class App extends React.Component {
  
  render(){
  return (
    <Router className="App">
      <Route path='/' component={Home} exact/>
    </Router>
  );
}
}

export default App;
