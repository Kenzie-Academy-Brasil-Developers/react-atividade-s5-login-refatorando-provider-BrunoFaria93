import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Route from './route'
import { Switch } from 'react-router-dom'


const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route isPrivate path='/dashboard' component={Dashboard}/>
    </Switch>
  );
};

export default Routes;