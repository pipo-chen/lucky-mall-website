import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './common/header/index'
function App() {
  return (

      <Router>
        <div>
          <Header/>
        </div>
      
      </Router>
    
  );
}

export default App;
