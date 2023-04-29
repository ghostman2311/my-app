import './App.css';
import ClickCounter from './components/ClickCounter';
import { withTimer } from './components/withCounter';

const ClickCounterWithTimer = withTimer(ClickCounter)

function App() {
  return (
    <div className="App">
      <h1>Intermediaate Typescript</h1>
      <ClickCounterWithTimer />
    </div>
  );
}

export default App;
