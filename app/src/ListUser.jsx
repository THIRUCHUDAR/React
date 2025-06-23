import { useEffect, useState } from "react";

function ListUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return userList.length === 0 ? (
    <p>user not found</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>S#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListUser;
