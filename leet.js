// const { check } = require("prettier");

// const merge = function(nums1, m, nums2, n) { 
//   let j = 0;
//   for(let i = 0; i <= nums1.length - 1; i++) { 
//     if(i < m) { 
//       if(nums1[i] > nums2[j]) { 
//         const temp = nums2[j]; //screenshot nums2
//         nums2[j] = nums1[i]; //make change to same array
//         nums1[i] = temp;
//         nums2.sort((a, b) => {return a - b;}); //update second array that needs screenshot
//       } else if(nums1[i] === nums2[j]) { 
//         continue;
//       } else { 
//         continue;
//       } 
//     } else { 
//       nums1[i] = nums2[j];
//       j++;
//     }
//   }
//   return nums1;
// };

// const res = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// console.log(res);

// const deleteDuplicates = function(head) {
//   let current = head;
  
//   while(current !== null && current.next !== null) { 
//     if(current.val === current.next.val) { 
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//   return head;
// };
// console.log(deleteDuplicates([1, 1, 2]));


class Stack {
  constructor() {
    this.collection = [];
    this.palindrome = [];
    this.temp = [];
  }

  push(val) {
    //  this.collection.push(val); 
    return [this.temp.push(val), this.collection.push(val)];

  }
  pop() {
    const value = this.collection.pop(); 
    // return this.collection.pop();
    return this.palindrome.push(value);

  }
  peek() { 
    return this.collection[this.collection.length - 1];
  }
  fullStack() { 
    return this;
  }


  isPalindrome() { 
    // const palindrome = this.palindrome;
    for(let i = 0; i < this.palindrome.length; i++) { 
      if(this.palindrome[i] !== this.temp[this.temp[i]]) { 
        return false;
      } 
    }
    return true;
  }
}

const checkPal = new Stack();
// console.log('YOU GOT THIS!', checkPal.push('B'));
// checkPal.push('O');
// checkPal.push('B');
// checkPal.push('O');
checkPal.push('M');
checkPal.push('O');
checkPal.push('M');


// checkPal.push('4');
checkPal.pop();
checkPal.pop();
checkPal.pop();
// checkPal.pop();
// Do something to compare
// loop? raw compare?

// console.log(checkPal.peek());
// console.log(checkPal.fullStack());

// console.log(checkPal.isPalindrome());

const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function sortArray(array) {
  const length = array.length;
  for(let i = 0; i < length; i++) {
    // console.log('hello');
    if(array[i] < array[0]) { 
      // console.log(array[i]);
      array.unshift(array.splice(i, 1)[0]);
    } else { 

      if(array[i] < array[i - 1]) { 

        for(let j = 1; j < i; j++) { 

          if(array[i] >= array[j - 1] && array[i] < array[j]) { 

            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }  
  }
}
sortArray(nums);
console.log(sortArray(nums));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++) {
    if(array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if(array[i] < array[i - 1]) {
        //find where number should go
        for(let j = 1; j < i; j++) {
          if(array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);
