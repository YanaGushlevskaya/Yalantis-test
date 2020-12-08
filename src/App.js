import Employees from './components/Employees/employees';
import Main from './components/Main/main';
import { Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/employees" component={Employees} />
    </HashRouter>
  );
}

export default App;
