import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './common/header/index'
import TodoList from './common/todo/TodoList'
import { Provider } from 'react-redux'
import store from './common/store/index'
function App() {
  return (  
    //所有的组建都有能力获得 store
    <Provider store = {store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
