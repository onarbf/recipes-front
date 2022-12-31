import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import { RouterProvider } from "react-router-dom";
import router from './handlers/router.js';


function App() {
  const [search, setSearch] = useState('');
  return (
    
    <div className="App">
      <Header setSearch={setSearch}/>
      <RouterProvider router={router} />
   </div>
  );
}

export default App;
