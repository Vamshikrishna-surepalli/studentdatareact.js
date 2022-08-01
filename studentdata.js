import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [List, setList] = useState([]);

  const submit = () => {
    const date = { user, email, dob };
    if (user && email && dob) {
      setList((Is) => [...Is, date]);
      setuser("");
      setemail("");
      setdob("");
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="date"
        placeholder="mm/dd/yyyy"
        name="dob"
        value={dob}
        onChange={(e) => setdob(e.target.value)}
      />
      <button onClick={submit}>submit</button>
      {List.map((a) => (
        <div>
          <li>
            {a.user} {a.email} {a.dob}
          </li>
        </div>
      ))}
    </div>
  );
  
}

export default App;
