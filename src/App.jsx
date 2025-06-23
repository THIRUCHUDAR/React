import { useState } from "react";
import Home from "./New";
import ListUser from './ListUser.jsx';
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [user, setUser] = useState({ name: "thiru", username: "Thiruchudar" });
  const [userList, setUserList] = useState([]);
  const [user1, setUser1] = useState({ name: '', email: '', work: '', priority: '' });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Home name="Thiruchudar" usernmae="thiru5" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserList([...userList, { ...user }]);
        }}
        style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}
      >
        <input type="text" placeholder="Enter your Name" onChange={(e) => { user.name = e.target.value; }} />
        <input type="text" placeholder="Enter your e-mail" onChange={(e) => { user.email = e.target.value; }} />
        <input type="text" placeholder="Enter the work" onChange={(e) => { user.work = e.target.value; }} />
        <input type="text" placeholder="Enter the priority of the work" onChange={(e) => { user.priority = e.target.value; }} />
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <table className="table" style={{ border: "2px solid black", textAlign: "center" }}>
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th>Name</th>
              <th>E-mail</th>
              <th>Work</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index} style={{ border: "1px solid black" }}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.work}</td>
                <td>{user.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "20px" }}>
        <ListUser />
      </div>

      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
