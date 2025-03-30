export default class HashMap {
    constructor(){
        this.map = [];
    }

    hash(key) {
        // takes a key and produces a hash code with it
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        
        return hashCode;
    }

    set(key, value) {
        // takes two arguments: the first is a key, and the second is a value that is assigned to this key. 
        // If a key already exists, then the old value is overwritten, and we can say that we update the key’s value

        const index = this.hash(key);
        this.map[index] = [key, value];
    } 

    get(key) {
        // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.

        const index = this.hash(key);
        const map = this.map[index];
        if (map[0] === undefined) {
            return null;
        } else {
            return map[1];
        }
    } 

    has(key) {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
        const index = this.hash(key);
        const map = this.map[index];
        if (map[0] === undefined) {
            return false;
        } else {
            return true;
        }
    } 

    remove(key) {
        // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. 
        // If the key isn’t in the hash map, it should return false.

        const index = this.hash(key);
        const map = this.map[index];
        if (map[0] === undefined) {
            return false;
        } else {
            this.map[index] = undefined;
            return true;
        }
    } 

    length() {
        // returns the number of stored keys in the hash map.
        let count = 0;
        while (this.map[count] !== undefined) {
            count++;
        }
        return count;
    } 

    clear() {
        // removes all entries in the hash map.
    } 

    keys() {
        // returns an array containing all the keys inside the hash map.
    } 

    values() {
        // returns an array containing all the values.
    } 

    entries() {
        // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]] 
    } 
}