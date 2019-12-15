import { Collection } from './Collection';
import { View } from './View';
import { Model } from './Model';

export abstract class CollectionView<T extends Model<K>, K> extends View<T, K> {
	constructor(
		public parent: Element,
		public model: T,
		public collection: Collection<T, K>
	) {
		super(parent, model);
	}

	abstract renderItem(model: Model<K>, itemParent: Element): void;

	render(): void {
		this.parent.innerHTML = '';
		const element = document.createElement('template');
		element.innerHTML = this.template();

		this.collection.models.forEach(model => {
			this.renderItem(model, element);
		});

		//this.bindEvents(element.content);
		//this.mapRegions(element.content);

		this.onRender();

		this.parent.append(element.content);
	}
}
