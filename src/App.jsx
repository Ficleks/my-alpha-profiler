import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Login></Login>
        <Register></Register>
      </div>
    </Router>
  );
}

export default App;
