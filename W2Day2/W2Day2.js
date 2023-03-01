/* Create a function that everytime you invoke it, 
    it will print out the message "Congrats you earn the chance!", 
    however it can only print out the message with the first 5 excutions. 
    all the rest invoke will print out the message "Sorry you missed the chance"
 */
var printMsg = function() {
    let counter = 0;
    return function() {
        if (counter<5) {
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance");
        }
        counter++;
    }
}
const msgFunction = printMsg();
msgFunction();
msgFunction();
msgFunction();
msgFunction();
msgFunction();
msgFunction();

/* Filter an Array with a user input of minimum length */
function filterByMinLength(minLength) {
    return function(arr) {
      return arr.filter(function(item) {
        return item.length >= minLength;
      });
    };
  }
  
  const myArray = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];
  
  const filterByLength = filterByMinLength(7);  
  console.log(filterByLength(myArray));