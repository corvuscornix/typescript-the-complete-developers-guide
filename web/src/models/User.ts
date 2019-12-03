import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
	name?: string;
	age?: number;
	id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Eventing {
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		super();
		this.attributes = new Attributes<UserProps>(attrs);
	}

	get get() {
		return this.attributes.get;
	}
}
