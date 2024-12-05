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

  get(key) {
    let index = this.hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }
}

const myHash = new HashTable();
myHash.set("NAME", "Zayn");
myHash.set("Naam", "Maan");
myHash.set("Name", "Stacy");
const set = myHash.set("Name1", "Tom");
console.log(JSON.stringify(myHash.get("Name1")));
