import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import { RouterProvider } from "react-router-dom";
import router from './handlers/router.js';
function App() {
  return (
    
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
   </div>
  );
}

export default App;
