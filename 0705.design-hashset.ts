class MyHashSet {
  array: number[] = [];
  constructor() {
    this.array = [];
  }

  add(key: number): void {
    if (this.array.indexOf(key) === -1) this.array.push(key);
  }

  remove(key: number): void {
    const index = this.array.indexOf(key);
    if (index !== -1) this.array.splice(index, 1);
  }

  contains(key: number): boolean {
    return this.array.indexOf(key) !== -1;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
