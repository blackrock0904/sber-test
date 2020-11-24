import React, { useReducer } from 'react';
import logo from './data/screen.png';
import './App.css';
import { Context } from './store/Context';
import { reducer } from './store/reducer';
import { Header } from './components/Header';
import data from './data/data';
import { Table } from './components/Table';


function App() {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <Context.Provider value={{state, dispatch}}>
      <>
        <img src={logo} />
        <Header/>
        <Table/>
      </>
    </Context.Provider>
  );
}

export default App;
