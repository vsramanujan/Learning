
function createQueue() {
  const queue = [];

  return {
    //add or enqueue
    //remove or dequeue
    //peek
    //length
    //isEmpty()
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() { // Need to do get so that it does it everytime we call it and not only on creation <doesnt work that way on testing>
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
    print() {
      console.log(queue);
    },
    find(findFn) {
       for(let i =0;i<queue.length;i++) {
         if(findFn(queue[i])) {
           return true
         }
       }
       return false;
    }
  }
}

const q = createQueue();
//console.log(q.isEmpty());
q.enqueue("Hello")
q.enqueue("Hello1")
q.enqueue("Hello2")
//console.log(q.length)

exports.createQueue = createQueue;