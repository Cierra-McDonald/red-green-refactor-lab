// const hello = function() { 
//   console.log('hello world');
// };
// hello();

const merge = function(nums1, m, nums2, n) { 
  const sortedArr = [];
  let j = 0;
  for(let i = 0; i <= nums1.length - 1; i++) { 
    if(i < m){
      if(nums1[i] > nums2[j]){
        const temp = nums2[j];
        nums2[j] = nums1[i];
        nums1[i] = temp;
        nums2.sort((a, b) => {return a - b;});
      }
      else if(nums1[i] === nums2[j]){
        continue;
      }
      else {
        continue;
      }
    } else {
      nums1[i] = nums2[j];
      j++;
    }
  }
  return nums1;
};


const merge2 = function(nums1, m, nums2, n){
  nums1 = nums1.slice(0, m);
  nums1.concat(nums2);
  nums1.sort((a, b) => {return a - b;});
  return nums1;
};

const res = merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(res);
