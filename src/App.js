import Header from './pages/header/index'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
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
        <Route path='/header' exact component={Header}></Route> 
        <Route path='/'  exact component={Login}></Route>
        <Route path='/register' exact component={Register}></Route>
        <Route path = '/home' exact component = {Home}></Route>
      </div>
      </BrowserRouter>
    </Provider>
    <div>
      hjkasds 
    </div>
    </Container>
  );
}

export default App;
