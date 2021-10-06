import './App.css';
import SearchContainer from './components/Search/SearchContainer';
import ResultContainer from './components/Result/ResultContainer';
import AboutBookContainer from './components/AboutBook/AboutBookContainer';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <SearchContainer />
      <div>
        <Switch>
          <Route path="/:bookId" component={AboutBookContainer} />
          <Route path="/" component={ResultContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
