const initialState = {
  isFetching: false,
  isError: false,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_REQUESTED':
      return { ...state, isFetching: true,  isError: false };
    case 'SEARCH_SUCCEEDED':
      return { ...state, isFetching: false, results: action.results };
    case 'SERCH_FAILED':
      return { ...state, isFetching: false, isError: true, results: [] };
    default: 
      return state;
  } 
};