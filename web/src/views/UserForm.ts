import { User } from '../models/User';

export class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.setRandomAge,
			'click:.set-name': this.onSetNameClick
		};
	}

	setRandomAge = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (!input) return;
		const name = input.value;
		this.model.set({ name });
	};

	template(): string {
		return `
    <div>
      <h1>User form</h1>
      <div>${this.model.get('name')}</div>
      <div>${this.model.get('age')}</div>
      <input />
      <button class="set-name">Change name</button>
      <button class="set-age">Set random age</button>
    </div>
    `;
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

	render(): void {
		this.parent.innerHTML = '';
		const element = document.createElement('template');
		element.innerHTML = this.template();

		this.bindEvents(element.content);

		this.parent.append(element.content);
	}
}
