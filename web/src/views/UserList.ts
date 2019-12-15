import { CollectionView } from '../models/CollectionView';
import { User, UserProps } from '../models/User';
import { Model } from '../models/Model';

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: Model<UserProps>, itemParent: Element): void {
		const element = document.createElement('li');
		element.innerHTML = `${model.get('name')}: ${model.get('age')}`;
		itemParent.appendChild(element);
	}
	template(): string {
		return `<ul></ul>`;
	}
}
