import Header from './pages/header/index'
import TodoList from './pages/todo/TodoList'
import Login from './pages/login/index.js'
import { Provider } from 'react-redux'
import store from './store/index'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (  
    //所有的组建都有能力获得 store
    <Provider store = {store}>
      
      <BrowserRouter>
      <div>
        <Route path='/' exact  component={TodoList}></Route>
        <Route path='/header' exact component={Header}></Route> 
        <Route path='/login' exact component={Login}></Route>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
