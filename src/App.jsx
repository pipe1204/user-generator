import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './components/userList/UserList'

function App() {

  const baseURL = 'https://users-crud1.herokuapp.com/'

  const [users, setUsers] = useState()
  const [updateValue, setUpdateValue] = useState()

  //Fetching data from the users endpoint
  const fetchData = async () => {
    try {
      const response = await axios(`${baseURL}users/`)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  // Posting data to the Users endpoint
  const createUser = async (data) => {
    try {
      const response = await axios.post(`${baseURL}users/`, data)
      console.log(response)
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }

  //Deleting data from the Users endpoint
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${baseURL}users/${id}/`)
      console.log(response)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  //Updating an entry from the Users endpoint
  const updateUser = async (id, data) => {
    try {
      const response = await axios.patch(`${baseURL}users/${id}/`, data)
      console.log(response)
      fetchData()
    } catch (error) {
    }
  }

  return (
    <div className="App">
      <UserList 
        createUser={createUser}
        users={users}
        deleteUser={deleteUser}
        setUpdateValue={setUpdateValue}
        updateValue={updateValue}
        updateUser={updateUser}
      />
    </div>
  )
}

export default App
