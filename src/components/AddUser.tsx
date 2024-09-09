import React, { useContext, useState } from 'react'
import { UserContext } from '../context'
import { IFormValidation } from '../types'

const AddUser = () => {
	const [error, setError] = useState<IFormValidation>({ name: '', surname: '', age: '' })
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('Context not found')
	}
	const { handleAddUser, newUser, setNewUser } = context

	const hadnleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const errors: IFormValidation = {
            name: !newUser.name.trim() ? 'Name is required' : '',
            surname: !newUser.surname.trim() ? 'Surname is required' : '',
            age: !newUser.age ? 'Age is required' : ''
        }
    
        if (errors.name || errors.surname || errors.age) {
            return setError(errors)
        }

		handleAddUser(newUser)
		setError({ name: '', surname: '', age: '' })
        setNewUser({surname: "", name: "",age: null})
	}

	return (
		<>
			<h3>AddUser</h3>
			<form onSubmit={hadnleSubmit}>
				<div className="input_perent">
					<input
						type="text"
						value={newUser.name}
						placeholder="name"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNewUser({ ...newUser, name: e.target.value })
						}
					/>
					{error.name && <p style={{ color: 'red' }}>{error.name}</p>}
				</div>
				<div className="input_perent">
					<input
						type="text"
						value={newUser.surname}
						placeholder="surname"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNewUser({ ...newUser, surname: e.target.value })
						}
					/>
					{error.surname && (
						<p style={{ color: 'red' }}>{error.surname}</p>
					)}
				</div>
				<div className="input_perent">
					<input
						type="text"
						value={newUser.age || ''}
						placeholder="age"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNewUser({ ...newUser, age: Number(e.target.value) })
						}
					/>
					{error.age && <p style={{ color: 'red' }}>{error.age}</p>}
				</div>
				<button>add</button>
			</form>
		</>
	)
}

export default AddUser
