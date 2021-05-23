import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Order from './pages/order'
import User from './pages/user'
import { Provider } from 'react-redux'
import store from './store/index'
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from './style'
function App() {
  return (  
    //所有的组建都有能力获得 store
    <Container>
    <Provider store = {store}>
      <BrowserRouter>
      <div> 
        <Route path='/'  exact component={Login}></Route>
        <Route path='/register' exact component={Register}></Route>
        <Route path = '/home' exact component = {Home}></Route>
        <Route path ='/order' exact component = {Order}></Route>
        <Route path ='/user' exact component = {User}></Route>
      </div>
      </BrowserRouter>
    </Provider>
    
    </Container>
  );
}

export default App;
