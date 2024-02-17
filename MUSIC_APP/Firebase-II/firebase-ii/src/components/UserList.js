// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Correct import path

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('users').get();
        const userData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.Name}, <strong>Email:</strong> {user.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
