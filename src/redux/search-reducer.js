const SET_SEARCH_STRING = 'SET-SEARCH-STRING';
const SET_SEARCH_CATEGORY = 'SET-SEARCH-CATEGORY';
const SET_SEARCH_SORT_BY = 'SET-SEARCH-SORT-BY';
const SET_SEARCH_RESULT = 'SET-SEARCH-RESULT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const LOAD_MORE_BOOKS = 'LOAD-MORE-BOOKS';
const SET_START_INDEX = 'SET-START-INDEX';
const SET_CURRENT_BOOK = 'SET-CURRENT-BOOK';
const TOGGLE_IS_SEARCHED = 'TOGGLE-IS-SEARCHED';
const SET_TOTAL_ITEMS = 'SET-TOTAL-ITEMS';


const initialState = {
  form: {
    searchString: '',
    category: 'all',
    sortBy: 'relevance',
  },
  totalItems: 0,
  isFetching: false,
  startIndex: 0,
  maxResults: 30,
  searchResult: [],
  isSearched: false,
  currentBook: null
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
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case LOAD_MORE_BOOKS:
      return {
        ...state,
        searchResult: [...state.searchResult, ...action.items]
      };

    case SET_START_INDEX:
      return {
        ...state,
        startIndex: action.startIndex
      };

    case SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.currentBook
      };

    case TOGGLE_IS_SEARCHED:
      return {
        ...state,
        isSearched: action.isSearched
      };

    case SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.totalItems
      };

    default:
      return state;
  }
};

export const setSearchString = (string) => ({type: SET_SEARCH_STRING, string});
export const setSearchCategory = (category) => ({type: SET_SEARCH_CATEGORY, category});
export const setSearchSortBy = (sortBy) => ({type: SET_SEARCH_SORT_BY, sortBy});
export const setSearchResult = (items) => ({type: SET_SEARCH_RESULT, items});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setMoreBooks = (items) => ({type: LOAD_MORE_BOOKS, items});
export const setStartIndex = (startIndex, maxResults) => {
  const newStartIndex = startIndex + maxResults;
  return {type: SET_START_INDEX, startIndex: newStartIndex};
};
export const setCurrentBook = (currentBook) => ({type: SET_CURRENT_BOOK, currentBook});
export const toggleIsSearched = (isSearched) => ({type: TOGGLE_IS_SEARCHED, isSearched});
export const setTotalItems = (totalItems) => ({type: SET_TOTAL_ITEMS, totalItems});

export default searchReducer;
