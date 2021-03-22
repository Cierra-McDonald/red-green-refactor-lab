# red-green-refactor-lab
Red, Green, Refactor Lab
getName function
create a function that returns the name property of an object.

const spot = { name: 'spot', age: 5, weight: '20 lbs' }
getName(spot) // returns spot

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character) // returns Aang
Write a test
create your function, use bracket notation to get the objects name property
pass tests and commit
refactor, use dot notation to get the objects name
tests stay green, commit
refactor, destructure to get the objects name
tests stay green, commit
refactor, destructure function parameters and return name
tests stay green, commit
copyAndPush function
create a function that returns a new array with all the items in the original array and a new item pushed to the end.

const numbers = [1, 2, 3];
copyAndPush(numbers, 4) // return [1, 2, 3, 4];
Write a test
create your function, use push to add item to array and return array
green, commit
oops we were supposed to return a copy
add another test that makes sure that the original array is unchanged
update code, use spread to copy and append
green, commit
capitalizeAndFilter
create a function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f.

Write a test
create a function, use a for loop to get test to pass
green, commit
refactor, use array methods to instead of a for loop
fetchQuotes
Use the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote with the format:

{
  name: '...',
  text: '...',
  image: '...'
}
How do you handle the randomness? Check out:

expect any
BONUS: Mocks
use jest.mock to mock node-fetch see Mocking Modules
Rubric
2 points for getName function
2 point for copyAndPush
2 points for capitalizeAndFilter function
3 points for fetchQuotes function
1 point for commit history
