import Employees from './components/employees/employees';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Redirect exact to="/employees" />
        <Route path="/employees" component={Employees} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
