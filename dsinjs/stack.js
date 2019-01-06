
function createStack() {
      const array = [];

      return {
      push(item) {
        array.push(item);
      },
      pop() {
        return array.pop();
      },
      peek() {
        return array[array.length - 1];
      },
      get length() {
        return array.length;
      },
      isEmpty() {
        return array.length === 0;
      },
      print() {
        console.log(array);
      },
      find(findFn) {
        for(let i =0;i<array.length;i++) {
          if(findFn(array[i])) {
            return true
          }
        }
        return false;
     }
    }

}

exports.createStack = createStack;