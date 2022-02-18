/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useState, useEffect } from 'react'
import axios from 'axios';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import Users from '../components/Users';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
function Home() {
  /* - - - - - < Initialize Component-Level State /> - - - - - */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  /* - - - - - < Handle GitHub API Request /> - - - - - */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://api.github.com/users');
        const users = res.data;
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.log(err);
      } 
    }
    fetchUsers();
  }, [])

  /* - - - - - < Return JSX Markup /> - - - - - */
  return (
    <Users loading={loading} users={users} />
  );
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Home;