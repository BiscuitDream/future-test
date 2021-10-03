import './App.css';
import SearchContainer from './components/Search/SearchContainer';
import ResultContainer from './components/Result/ResultContainer';

function App() {
  return (
    <div className="app-wrapper">
      <SearchContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
