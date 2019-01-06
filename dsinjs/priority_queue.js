const {createQueue} = require('./queue');

function createPriorityQueue() {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();
    
    return {
      enqueue(value, highPriority=false) {
          if(highPriority) {
            highPriorityQueue.enqueue(value);
          }
          else {
            lowPriorityQueue.enqueue(value);
          }
      },
      dequeue() {
        if(highPriorityQueue.isEmpty()) {
          return lowPriorityQueue.dequeue();
        }
        return highPriorityQueue.dequeue;
      },
      peek() {
        if(highPriorityQueue.isEmpty()) {
          return lowPriorityQueue.peek();
        }
        return highPriorityQueue.peek();
      },
      get length() {
        return highPriorityQueue.length + lowPriorityQueue.length;
      },
      isEmpty() {
        return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
      }
    }
}

let s = new createPriorityQueue();
s.enqueue("1");
s.enqueue("2");
s.enqueue("3",true);
s.enqueue("5",true);
//console.log(s.length)