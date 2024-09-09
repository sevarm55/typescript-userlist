export interface IUser {
	id: number
	name: string
	surname: string
	age: number | null
	isMarried?: boolean
}

export interface IFormValidation {
    name: string,
    surname: string,
    age: string
}

export type InputUser = Omit<IUser,"id">

export interface IContext {
	users: IUser[]
	handleAddUser: (user: InputUser) => void
    newUser: InputUser
    setNewUser: (user:InputUser) => void
    removeUser: (id:number) => void
}
