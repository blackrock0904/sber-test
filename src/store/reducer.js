import { SORT_DELTA, SORT_COLUMNS } from './actionTypes';

export const reducer = (state, action) => {

  const compare_delta = (a,b) => b[action.payload] - a[action.payload];
  const compare_columns = (a,b) => (a.axis.r[action.payload].sName_RU > b.axis.r[action.payload].sName_RU) ? 1 : -1;
  
  switch (action.type) {
    case SORT_DELTA:
    return {...state, rows: state.rows.sort(compare_delta)}
    case SORT_COLUMNS:
    return {...state, rows: state.rows.sort(compare_columns)}
    default:
      return state;
  }
}
