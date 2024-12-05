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
}

const myHash = new HashTable();

console.log(myHash);
