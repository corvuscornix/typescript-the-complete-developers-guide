import { CollectionView } from '../models/CollectionView';
import { User, UserProps } from '../models/User';
import { Model } from '../models/Model';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		//const element = document.createElement('li');
		//element.innerText = `${model.get('name')}: ${model.get('age')}`;
		//itemParent.append(element);
		new UserShow(itemParent, model).render();
	}
}
