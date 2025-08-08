/* function checkDouble(string){
let dbarr=[];
for (let i = 0 ; i < string.length ; i++ ){
    let count=1;
    for (let j = i + 1 ; j < string.length ;j++){
    if (string[i] === string[j]){
        count++;
    }
    if (count >= 3 && !dbarr.includes(string[i])) {
        dbarr.push(string[i]);
      }
    }
}
return dbarr;
}
console.log(checkDouble("abccdefee")) */
//resultce
/* function checkDouble(string) {
    let dbarr = [];
    for (let i = 0; i < string.length; i++) {
      let count = 1;
      // Check if we've already processed this character
      if (!dbarr.includes(string[i])) {
        // Count occurrences of this character in the entire string
        for (let j = i + 1; j < string.length; j++) {
          if (string[i] === string[j]) {
            count++;
          }
        }
        if (count >=2) {
          dbarr.push(string[i]);
        }
      }
    }
    return dbarr;
  }
  // Example usage:
  console.log(checkDouble("aaabbdde")); */

