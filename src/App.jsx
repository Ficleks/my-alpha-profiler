import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
    </Router>
  );
}

export default App;
