class MyHashMap {
  map: number[][];
  constructor() {
    this.map = [];
  }

  put(key: number, value: number): void {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) {
        this.map[i][1] = value;
        return;
      }
    }
    this.map.push([key, value]);
  }

  get(key: number): number {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) return this.map[i][1];
    }
    return -1;
  }

  remove(key: number): void {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) {
        this.map.splice(i, 1);
        return;
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
