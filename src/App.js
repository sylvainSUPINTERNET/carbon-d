import logo from './7382.png';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Home } from './components/Home.component';
import { Profile } from './components/Profile.component';
import { Menu } from './components/Menu.component';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
          <Home path="/"/>
          <Profile path="/profile"/>
      </Router>
    </div>

  );
}

export default App;
