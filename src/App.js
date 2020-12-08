import Employees from './components/Employees/employees';
import Main from './components/Main/main';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/Yalantis-test" component={Main} />
      <Route exact path="/Yalantis-test/employees" component={Employees} />
    </Switch>
  );
}

export default App;
