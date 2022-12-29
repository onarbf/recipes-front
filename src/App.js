import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';

import HomePage from './pages/HomePage/HomePage.js';
import RecipePage from './pages/RecipePage/RecipePage.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/recipe/:id" element={<RecipePage/>}/>
        </Routes>
      </Router>
   </div>
  );
}

export default App;
