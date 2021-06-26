import { Router, Redirect } from "@reach/router";
import { Home } from './components/Home.component';
import { Profile } from './components/Profile.component';
import { Menu } from './components/Menu.component';
import { SharingPoint } from './components/outland/SharingPoint.component';
import { nanoid } from 'nanoid'


function App() {
  return (
    <div>
      <Menu/>
      <Router>
          <Home path="/"/>
          <Profile path="/profile"/>
          <Redirect from={`/sharing`} to={`/sharing/${nanoid(6)}`} noThrow></Redirect>
          <SharingPoint exact path="/sharing/:roomId"></SharingPoint>
      </Router>
    </div>

  );
}

export default App;
