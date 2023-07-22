import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFetchNewUsers = () => {
    fetchUsers();
  };
  return (
    <div>
      <button onClick={handleFetchNewUsers}>Fetch New Users</button>
      <div className="user-cards-container">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
