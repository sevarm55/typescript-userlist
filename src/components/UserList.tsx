import { useContext } from 'react'
import { UserContext } from '../context'

const UserList = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('Context not found')
	}
	const { users,removeUser } = context

	return (
		<div className='userList'>
			{users.map((user) => {
				return (
					<div className='userItem' key={user.id}>
						<p>Name: {user.name}</p>
						<p>surname: {user.surname}</p>
						<p>age: {user.age}</p>
                        <button onClick={() => removeUser(user.id)}>x</button>
					</div>
				)
			})}
		</div>
	)
}

export default UserList
