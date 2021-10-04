const SET_SEARCH_STRING = 'SET-SEARCH-STRING';
const SET_SEARCH_CATEGORY = 'SET-SEARCH-CATEGORY';
const SET_SEARCH_SORT_BY = 'SET-SEARCH-SORT-BY';


const initialState = {
  form: {
    searchString: '',
    category: 'all',
    sortBy: 'relevance',
  },
  searchResult: [{
    id: 1,
    title: 'название первое',
    author: 'автор 1',
    category: 'категория 1'
  }, {
    id: 2,
    title: 'название второе',
    author: 'автор 2',
    category: 'категория 2'
  }]
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

    default:
      return state;
  }
};

export const setSearchString = (string) => ({type: SET_SEARCH_STRING, string});
export const setSearchCategory = (category) => ({type: SET_SEARCH_CATEGORY, category});
export const setSearchSortBy = (sortBy) => ({type: SET_SEARCH_SORT_BY, sortBy});

export default searchReducer;
