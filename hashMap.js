export default class HashMap {
    constructor(capacity = 16) {
        this.loadFactor = 0.75;
        this.capacity = capacity;
        this.table = new Array(capacity).fill(null);
    }

    hash(key) {
        // takes a key and produces a hash code with it
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity;
    }

    set(key, value) {
        // takes two arguments: the first is a key, and the second is a value that is assigned to this key. 
        // If a key already exists, then the old value is overwritten, and we can say that we update the key’s value

        const index = this.hash(key);
        this.table[index] = value;
    } 

    get(key) {
        // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        } else {
            return this.table[index];
        }
    } 

    has(key) {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        } else {
            return true;
        }
    } 

    remove(key) {
        // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. 
        // If the key isn’t in the hash map, it should return false.

        const index = this.hash(key);
        if (!this.table[index]) {
            return false;
        } else {
            delete this.table[index];
            return true;
        }
    } 

    length() {
        // returns the number of stored keys in the hash map.
        let count = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null && this.table[i] !== undefined) {
                count++;
            }
        }
        return count;
    } 

    clear() {
        // removes all entries in the hash map.
        this.table = new Array(this.capacity);
    } 

    keys() {
        // returns an array containing all the keys inside the hash map.
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null && this.table[i] !== undefined) {
                let index = this.hash(this.table[i]);
                array.push(index);
            }
        }
        return array;
    } 

    values() {
        // returns an array containing all the values.
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null && this.table[i] !== undefined) {
                array.push(this.table[i]);
            }
        }
        return array;
    } 

    entries() {
        // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]] 
        let array = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null && this.table[i] !== undefined) {
                let index = this.hash(this.table[i]);
                array.push(`[${index}, ${this.table[i]}]`);
            }
        }
        return array;
    }
}
