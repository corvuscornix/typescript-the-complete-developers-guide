import { Model } from './Model';

interface HasId {
	id?: number;
}

export abstract class View<T extends Model<K>, K> {
	regions: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	regionsMap(): { [key: string]: string } {
		return {};
	}

	abstract template(): string;

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			if (!element) return;

			this.regions[key] = element;
		}
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');

			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}

	onRender(): void {}

	render(): void {
		this.parent.innerHTML = '';
		const element = document.createElement('template');
		element.innerHTML = this.template();

		this.bindEvents(element.content);
		this.mapRegions(element.content);

		this.onRender();

		this.parent.append(element.content);
	}
}
