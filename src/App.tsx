import { useState } from 'react'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import { IUser, InputUser } from './types'

import { UserContext } from './context'
import './App.css'

function App() {
	const [users, setUsers] = useState<IUser[]>([
		{id: 101,	name: 'Ashot',surname: 'Hovhanisyan',age: 25,isMarried: false,},
		{ id: 102, name: 'Karen', surname: 'Movsisyan', age: 48, isMarried: true },
		{id: 103,name: 'Astghik',surname: 'Atoyan',age: 35,isMarried: true,},
		{id: 104,name: 'Mariam',surname: 'Matevosyan',age: 32,isMarried: false,},
	])

  const [newUser,setNewUser] = useState<InputUser>({
    name: "",
    surname: "",
    age: null,
  })

  const handleAddUser = (user:InputUser) => {
    setUsers([...users,{...user, id:Date.now()}])
  }

  const removeUser = (id:number) => {
    setUsers(users.filter(user => user.id !== id))
  }

	return (
		<>
			<UserContext.Provider
				value={{
					users,
          handleAddUser,
          newUser,
          setNewUser,
          removeUser
				}}
			>
				<AddUser />
				<UserList />
			</UserContext.Provider>
		</>
	)
}

export default App
