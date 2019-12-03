import { User } from './models/User';

const user = new User({ age: 45 });

user.set({ name: 'Shammy' });

user.save();
