import './App.css';
import ClickCounter from './components/ClickCounter';
import { withLoading } from './components/withLoading';
// import { withTimer } from './components/withCounter';

// const ClickCounterWithTimer = withTimer(ClickCounter)


const List: React.FC = () => {
  return <div>I am the data</div>;
};


const ListWithLoading = withLoading(List);

function App() {
  return (
    <div className="App">
      <h1>Intermediaate Typescript</h1>
      {/* <ClickCounterWithTimer /> */}
      <ListWithLoading loading={false}/>
    </div>
  );
}

export default App;
