//STEP 1
/* function sortAlphabeticaly(str){
    return str.split("").sort().join("")
} 
console.log(sortAlphabeticaly('webmaster'))
 */
//STEP 2
/* function ConverToUppercase(str){
    //contver string to array of words
    let words = str.split(" ")
    console.log(words)
    for(let i = 0; i< words.length; i++){
        //take the first char of the word convert it to uppercase 
        //then concatenate uppcase letter to the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    // Join the words back into a string from array
    let result = words.join(" ")
    return result
}
console.log(ConverToUppercase('the quick brown fox'))
 */


//STEP 3
    /* 
    function countVowels(str){
    let count = 0                         //create and set count to 0
    let vowels = ['a','e','i','o','u']   // create vowels array
    for(let char of str){                // loop through given string
        if(vowels.includes(char)){          // Check if char is vowels
            count++                         //increment the count if vowels found
        }
    }
    return count                         // return the count
        
    }
    console.log(countVowels('The quick brown fox'))
 */

//STEP 4
/*
    //declare all possible charachter list
 let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateId(length) {
    let id = ' ';           // declare id variable to empty string
    for ( let i = 0; i < length; i++ ) {  
        //select random charater from the charater list 
        //add it to id string lenght times
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}
console.log(generateId(8)); */

//STEP 5
/* function Longest_Country_Name(arr){
    let lngth = 0;
    let londestCountry;
      
      for (let i = 0; i < arr.length; i++) { 
        if (arr[i].length > lngth) {         
          let lngth = arr[i].length;
          londestCountry = arr[i];
        }
      }
    return londestCountry
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])) */