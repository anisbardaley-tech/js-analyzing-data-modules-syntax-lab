
function combineUsers(...args) {
  //Initialize return object
  //Inside combineUsers, define the variable 'combinedObject' (object).
  //Initialize with a key of 'users' with the value []
  let combinedObject = {
    users: []
  };

  //Loop through args
  //Merge arrays
  //Loop through args to isolate each array and merge them into 
  //the 'users' attribute of 'combinedObject' using a spread operator.
  for (let argsArray of args) {
    combinedObject.users = [...combinedObject.users, ...argsArray];
  }

  //Get today's date
  //Add an attribute to 'combinedObject' called 'merge_date' and, 
  //using Date(), give it the format of M/D/yyyy.
  const today = new Date();
  const month = today.getMonth() + 1; // Months are 0-indexed
  const day = today.getDate();
  const year = today.getFullYear();
  
  combinedObject.merge_date = `${month}/${day}/${year}`;

  //Return object
  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};  

const result = combineUsers("Titus","Albert","Ryan","Anis");
console.log(result)