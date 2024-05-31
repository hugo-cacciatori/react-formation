import { createContext, useContext, useState} from "react";
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import axios from "axios";

const ctx = createContext();

const Provider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
      (async () => {
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);
      })();
    }, [])

    const addUser = async (newUser) => {
        const newUserFromApi = await axios.post("http://localhost:3000/users", newUser).data;
        setUsers([...users, newUserFromApi]);
      }

      const removeUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
      }
    
      const getUser = (userId) => users.find(user => `${user.id}` === `${userId}`);

    return (
        <ctx.Provider value={{users, addUser, removeUser, getUser}}>
            {children}
        </ctx.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}


const useUsers = () => {
    return useContext(ctx);
  }
  
  export { Provider, useUsers }
  export default useUsers;