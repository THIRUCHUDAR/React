import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./New";
import ListUser from './ListUser.jsx';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [user, setUser] = useState({ name: "", email: "", work: "", priority: "" });
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser({ name: "", email: "", work: "", priority: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home name="Thiruchudar" usernmae="thiru5" />
              <form onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
                <input name="email" placeholder="E-mail" value={user.email} onChange={handleChange} />
                <input name="work" placeholder="Work" value={user.work} onChange={handleChange} />
                <input name="priority" placeholder="Priority" value={user.priority} onChange={handleChange} />
                <button type="submit">Submit</button>
              </form>

              <table style={{ marginTop: "20px", border: "2px solid black", textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Work</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.work}</td>
                      <td>{user.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ListUser />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
