import { View } from './View';
import { UserProps, User } from '../models/User';

export class UserShow extends View<User, UserProps> {
	template(): string {
		return `
      <div>
      <h1>User detail</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
	}
}
