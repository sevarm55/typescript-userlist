import { useContext } from 'react'
import { UserContext } from '../context'

const UserList = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('Context not found')
	}
	const { users, removeUser } = context

	return (
		<div className="userList">
			<h3>Userlist</h3>
			{users.map((user) => {
				return (
					<div className="userItem" key={user.id}>
						<div className="userItemGlob">
							<div className="leftSide">
								<p className="userChild name">
									<strong>Name:</strong>
									{user.name} /
								</p>
								<p className="userChild surname">
									<strong>Surname:</strong> {user.surname} /
								</p>
								<p className="userChild age">
									<strong>Age:</strong> {user.age} /
								</p>
							</div>
							<div>
								<button onClick={() => removeUser(user.id)}>x</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default UserList
