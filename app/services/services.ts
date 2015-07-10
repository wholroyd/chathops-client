import {Encryption} from './encryption';
import {Hashing} from './hashing';
import {Identifier} from './identifier';
import {State} from './state';

export var serviceInjectables: Array<any> = [
    Encryption,
    Hashing,
    Identifier,
    State
];