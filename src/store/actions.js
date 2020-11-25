import { SORT_DELTA, SORT_COLUMNS } from './actionTypes';

export const sort_columns = (p) => ({
  type: SORT_COLUMNS,
  payload: p
})

export const sort_delta = (p) => ({
  type: SORT_DELTA,
  payload: p
})
