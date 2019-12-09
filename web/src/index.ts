import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'anders', age: 34 });

const root = document.getElementById('root');
if (root) {
	const userEdit = new UserEdit(root, user);

	userEdit.render();
} else {
	throw new Error('No root found');
}
