import Employees from './components/employees/employees';
import { Route, Redirect, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route path="/">
        <Redirect exact to="/employees" />
        <Route path="/employees" component={Employees} />
      </Route>
    </HashRouter>
  );
}

export default App;
