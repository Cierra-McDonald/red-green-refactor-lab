

const upperCaseFilter = (arr) => {
 
  const newArr = [];

  for(let i = 0; i < arr.length; i++) { 
    newArr.push(arr[i].toUpperCase());
    
    if(arr[i].charAt(0) === 'f' || arr[i].charAt(0) === 'F') { 
      newArr.pop();
    }
  }

  return newArr;

};

module.exports = upperCaseFilter;
