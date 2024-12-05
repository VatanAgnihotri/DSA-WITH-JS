class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);
    return this;
  }
}

const myHash = new HashTable();
myHash.set("NAME", "Zayn");
myHash.set("Naam", "Zayn");
myHash.set("Name", "Zayn")
const set = myHash.set("Name", "Zayn");
console.log(JSON.stringify(set));
