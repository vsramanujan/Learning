function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {

  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
        const node = createNode(value);
        if(this.head === null) {
          this.head = node;
          this.tail = node;
          this.length++;
          return node;
        }
        this.tail.next= node;
        this.tail = node;
        this.length ++;
        return node;
    },
    pop() {
      if(this.isEmpty()) {
        return null
      }
      const node = this.tail;
      if(this.head === this.tail) {
        this.head=null;
        this.tail=null;
        this.length=0;
        return node;
      }
      const current = this.head;
      while(current.next!==this.tail) {
        current = current.next
      }
      current.next = null;
      const returnItem = this.tail;
      this.tail = current;
      return returnItem;
    },
    isEmpty() {
      if(this.head===null) {
        return true;
      }
      return false;
    },
    print() {
      if(this.isEmpty()) {
        console.log("Nothing in list")
      }
      let current = this.head;
      while(current!=null){
          console.log(current.value);
          current = current.next;
      }
    }
  }
}

const a = createLinkedList();
a.push(2)
a.push(8)
a.pop()
a.pop()
a.pop()
//a.print()