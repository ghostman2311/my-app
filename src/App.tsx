import './App.css';


type Props = {
  name: string;
  age: number;
  address: string;
  phone: string;
}

const ParentComponent: React.FC<Props> = props => {
  const {name, age} = props;

  return <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <ChildComponent name={name} age={age}/>
  </div>
}


type ChildProps = Pick<Props, "name" |"age">

const ChildComponent: React.FC<ChildProps> = props => {

  return <div>
    <h2>Child Component</h2>
    <p>Name: {props.name}</p>
    <pre>Age: {props.age}</pre>
  </div>

}

function App() {
  return (
    <div className="App">
      <h1>Intermediaate Typescript</h1>
      <ParentComponent name='Nikhil' age={24} address='560/1' phone='6280208220'/>
    </div>
  );
}

export default App;
