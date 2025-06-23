import { useState } from "react";
import New from "./New.jsx";
import ListUser from "./ListUser.jsx";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [userList, setUserList] = useState([]);

  return (
    <>
      <New name="Thiru" username="thiru5" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserList([...userList, { ...user }]);
        }}
      >
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Enter your e-mail"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table table-striped" style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ListUser />
    </>
  );
}

export default App;
