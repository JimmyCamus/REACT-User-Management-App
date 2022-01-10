import { useState } from "react";
import Card from "./components/Card.js";
import Container from "./components/Container.js";
import UserForm from "./components/UserForm.js";

function App() {
  const [users, setUser] = useState([]);
  const submit = (usuario) => {
    setUser([...users, usuario]);
  };

  console.log(users);
  return (
    <div style={{marginTop:'15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((user) => (
              <li
                key={`${user.name}`}
              >{`${user.name} ${user.lastName} ${user.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
