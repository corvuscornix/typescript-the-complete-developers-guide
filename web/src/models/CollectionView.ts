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

		collection.on('change', () => {
			this.render();
		});

		collection.fetch();
	}

	abstract renderItem(model: Model<K>, itemParent: Element): void;

	/* Default implementation which can be overridden */
	template(): string {
		return '<ul></ul>';
	}

	render(): void {
		this.parent.innerHTML = '';

		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		const firstElementChild = templateElement.content.firstElementChild;
		if (!firstElementChild) return;

		this.collection.models.forEach(model => {
			const itemParent = document.createElement('div');
			this.renderItem(model, itemParent);
			firstElementChild.append(itemParent);
		});

		//this.bindEvents(element.content);
		//this.mapRegions(element.content);

		this.onRender();
		this.parent.appendChild(templateElement.content);
	}
}
