const SET_SEARCH_STRING = 'SET-SEARCH-STRING';
const SET_SEARCH_CATEGORY = 'SET-SEARCH-CATEGORY';
const SET_SEARCH_SORT_BY = 'SET-SEARCH-SORT-BY';
const SET_SEARCH_RESULT = 'SET-SEARCH-RESULT';


const initialState = {
  form: {
    searchString: '',
    category: 'all',
    sortBy: 'relevance',
  },
  startIndex: 0, // pagination
  maxResults: 30, // pagination
  searchResult: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return {
        ...state,
        form: {
          ...state.form,
          searchString: action.string
        }
      };

    case SET_SEARCH_CATEGORY:
      return {
        ...state,
        form: {
          ...state.form,
          category: action.category
        }
      };

    case SET_SEARCH_SORT_BY:
      return {
        ...state,
        form: {
          ...state.form,
          sortBy: action.sortBy
        }
      };

    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.items
      }

    default:
      return state;
  }
};

export const setSearchString = (string) => ({type: SET_SEARCH_STRING, string});
export const setSearchCategory = (category) => ({type: SET_SEARCH_CATEGORY, category});
export const setSearchSortBy = (sortBy) => ({type: SET_SEARCH_SORT_BY, sortBy});
export const setSearchResult = (items) => ({type: SET_SEARCH_RESULT, items});

export default searchReducer;
