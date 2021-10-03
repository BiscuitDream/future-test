const initialState = {
  searchResult: [{
    title: 'название первое',
    author: 'автор 1',
    category: 'категория 1'
  }, {
    title: 'название второе',
    author: 'автор 2',
    category: 'категория 2'
  }]
};

const searchReducer = (state = initialState, action) => {
  return state;
};

export default searchReducer;
