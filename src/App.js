import './App.css';
import Search from "./components/Search/Search";
import ResultContainer from "./components/Result/ResultContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Search />
      <ResultContainer />
    </div>
  );
}

export default App;
