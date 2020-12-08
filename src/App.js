import Employees from './components/employees/employees';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Redirect to='/employees' />
      </Route>
      <Route path='/employees' component={Employees} />
    </BrowserRouter>
  );
}

export default App;
