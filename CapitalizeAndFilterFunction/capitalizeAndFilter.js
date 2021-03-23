
const upperCaseFilter = (arr) => {
 
  const mapMe = arr.map(month => month.toUpperCase()).filter((f) => f.charAt(0) !== 'F');

  return mapMe;

};

module.exports = upperCaseFilter;
