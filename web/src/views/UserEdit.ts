import { View } from './View';
import { UserProps, User } from '../models/User';

export class UserEdit extends View<User, UserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form'
		};
	}

	template(): string {
		return `
      <div>
      <div class="user-show"></div>
      <div class="user-edit"></div>
      </div>
    `;
	}
}
