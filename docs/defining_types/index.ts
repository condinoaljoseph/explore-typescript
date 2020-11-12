// defining_types
interface User {
	name: string;
	id: number;
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user: User = new UserAccount("Aj", 1);

function getUser(): User {
	return {
		name: "Aj",
		id: 1
	};
}

function deleteUser(user: User) {
	return user;
}

console.log(getUser());
console.log(deleteUser({ name: "Vince", id: 2 }));
