import Employees from './components/employees/employees';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/Yalantis-test">
        <Redirect exact to="/Yalantis-test/employees" />
        <Route path="/Yalantis-test/employees" component={Employees} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
