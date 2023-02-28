// myMap function implementation with arrow function
Array.prototype.myMap = function(callback) {
    let newArray = [];
  
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
  
    return newArray;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  
  const squares = numbers.myMap(num => num * num);
  
  console.log(squares); 
  

// myReduce function implementation
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); 
