import React, { useReducer } from 'react';
import { Context } from './store/Context';
import { reducer } from './store/reducer';
import { Header } from './components/Header';
import data from './data/data';
import { Table } from './components/Table';


function App() {
  const initialState = {
    rows: data.fa.fa_data.r, titles: data.fa.fa_data.axis.r, maxDelta: data.fa.fa_data.r.reduce((acc, el) => {
      return (Math.abs(el.fDeltaPlan) > acc) ? Math.abs(el.fDeltaPlan) : acc;
    }, 0)
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <>
        <Header />
        <Table />
      </>
    </Context.Provider>
  );
}

export default App;
