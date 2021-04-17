
const upperCaseFilter = (arr) => {
 
  const mapMe = arr.map(month => month.toUpperCase()).filter((f) => f.charAt(0) !== 'F');

  return mapMe;

};

module.exports = upperCaseFilter;


// const MinStack = function() {
//   this.minStack = [];
//   this.collection = [];
// };

// MinStack.prototype.push = function(x) {
//   this.collection.push(x);
//   if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
//     this.minStack.push(x);
//   }
// };
// MinStack.prototype.pop = function() {
//   const x = this.collection.pop();
//   if(x === this.minStack[this.minStack.length - 1]) {
//     this.minStack.pop();
//   }
// };
// MinStack.prototype.top = function() {
//   return this.collection[this.collection.length - 1];
// };
// MinStack.prototype.getMin = function() {
//   return this.minStack[this.minStack.length - 1];
// };

// const cStack = new MinStack();

// cStack.push(4);
// cStack.push(2);
// cStack.push(-3);
// cStack.push(7);
// cStack.top();
// cStack.getMin();
// cStack.push(18);
// cStack.push(-19);
// cStack.push(20);
// console.log(cStack);


// let counter = 0; 
// function inception() {
  
//   if(counter > 3){
//     return 'done!'; 
//   }
//   counter++; 
//   return inception(); 
// } 
// console.log(inception());

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for(let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for(let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if(this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Cristian');
myQueue.enqueue('Kyle');
myQueue.enqueue('Cierra');
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
