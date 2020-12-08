import Employees from './components/Employees/employees';
import Main from './components/Main/main';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/employees" component={Employees} />
    </Switch>
  );
}

export default App;
