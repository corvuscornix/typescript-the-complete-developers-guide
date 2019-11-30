import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([-1000, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Hello world');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
