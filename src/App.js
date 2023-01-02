import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";

import ContextData from './handlers/context.js';

import Header from './components/Header/Header.js';
import HomePage from './pages/HomePage/HomePage.js';
import RecipePage from './pages/RecipePage/RecipePage.js';
import SearchPage from './pages/SearchPage/SearchPage.js';



function App() {
  
  const [search, setSearch] = useState();

  return (    
    <div className="App">
       <ContextData.Provider value={{search, setSearch}}>
          <Header/>
        </ContextData.Provider>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route  path="/category/:category" component={()=>(
          <ContextData.Provider value={{search, setSearch}}>
            <SearchPage/>
          </ContextData.Provider>
          )} />
        <Route  path="/search" component={()=>(
          <ContextData.Provider value={{search,setSearch}}>
            <SearchPage/>
          </ContextData.Provider>
          )} />
      </Switch>
   </div>
  );
}

export default App;
