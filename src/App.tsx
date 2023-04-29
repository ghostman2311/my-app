import React, { useState } from 'react';
import './App.css';


type User = {
  name: string;
  email: string;
  age: number;
}

type UserFormProps = {
  user: Partial<User>
}

const UserForm = ({ user }: UserFormProps) => {
  const [name, setName] = useState(user.name ?? "")
  const [email, setEmail] = useState(user.email ?? "")
  const [age, setAge] = useState(user.age ?? "")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, age, email });
  }

  return <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
    <label>Age</label>
    <input type='number' value={age} onChange={e => setAge(e.target.value)} />
    <label>Email</label>
    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
     <br />
      <button type="submit">Submit</button>
  </form>
}

function App() {
  const user: Partial<User> = {name: "john"}
  return (
    <div className="App">
      <h1>Intermediaate Typescript</h1>
      <UserForm user={user} />
    </div>
  );
}

export default App;
