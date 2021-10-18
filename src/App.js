import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Cytoscape from './components/cytoscape';
import G6 from './components/g6';
import G6React from './components/g6-react';
import Vis from './components/vis';

function App() {
  return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/cytoscape">Cytoscape</Link>
          </li>
          <li>
            <Link to="/vis">vis-network</Link>
          </li>
          <li>
            <Link to="/g6">G6</Link>
          </li>
          <li>
            <Link to="/g6-react">G6-react</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/g6-react">
            <G6React></G6React>
          </Route>
          <Route path="/g6">
            <G6></G6>
          </Route>
          <Route path="/vis">
            <Vis></Vis>
          </Route>
          <Route path="/cytoscape">
            <Cytoscape></Cytoscape>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
