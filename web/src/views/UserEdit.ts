import { View } from '../models/View';
import { UserProps, User } from '../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { UserList } from './UserList';
import { Collection } from '../models/Collection';

export class UserEdit extends View<User, UserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
			userList: '.user-list'
		};
	}

	onRender(): void {
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
		const userList = new UserList(
			this.regions.userList,
			this.model,
			User.buildUserCollection()
		);
		userList.render();

		this.model.on('save', () => {
			userList.collection.add(this.model);
		});
	}

	template(): string {
		return `
      <div>
      <div class="user-show"></div>
			<div class="user-form"></div>
			<div class="user-list"></div>
      </div>
    `;
	}
}
