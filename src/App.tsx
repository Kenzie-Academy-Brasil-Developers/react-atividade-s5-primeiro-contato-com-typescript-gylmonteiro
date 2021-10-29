import React, { useState } from "react";
import { ContainerForm, Button } from "../src/components/styles/index";

import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

interface User {
  name: string;
  age: number;
  hobby: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleUser = (name: string, hobby: string, age: number) => {
    if (age > 0) {
      setUsers([...users, { name, hobby, age }]);
      setName("");
      setHobby("");
      setAge(0);
    }
  };

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <ContainerForm>
          <Input
            value={name}
            placeholder="Digite seu nome"
            label="nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            value={hobby}
            label="hobby"
            placeholder="Seu Hobby favorito"
            onChange={(e) => setHobby(e.target.value)}
          />
          <Input
            value={age}
            label="idade"
            placeholder="Sua Idade"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Button onClick={() => handleUser(name, hobby, age)}>
            Criar Usuário
          </Button>
        </ContainerForm>
        <Card users={users} />
      </header>
    </div>
  );
}

export default App;
