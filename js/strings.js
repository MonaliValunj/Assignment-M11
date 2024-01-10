//STEP 1
// let myName = window.prompt("Enter your name: ");
// window.alert("your  name is "+ myName.length + " charater long")

//STEP 2
// let myName = window.prompt("Enter your name: ");
// let n = window.prompt("Enter number")
// window.alert("Charater at:  "+ myName.charAt(n))

//STEP 3
// let firstName = window.prompt("Enter your first name: ");
// let lastName = window.prompt("Enter your last name: ");
// window.alert("Your name is: " + firstName.concat(" ", lastName))

//STEP 4
// let text = "The quick brown fox jumps over the lazy dog";
// window.alert("index of 'fox' is : "+ text.indexOf("fox"));

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox";
// window.alert("last index of 'fox' is : "+ text.lastIndexOf("fox"));

//STEP 6
// let text = "The quick brown fox jumped over the lazy dog";
// let userName = window.prompt("Enter your name");
// let newText = text.replace("the lazy dog", userName)
// window.alert("new text: "+ newText);

//STEP 7
// let text = "The quick brown fox jumped over the lazy dog";
// let word = window.prompt("Enter word you looking for: ");
// let result = text.search(word)
// window.alert(word + " word found at index "+ result);

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(31,43)
// // let new_string = old_string.substring(old_string.indexOf("the lazy dog"));
// window.alert(new_string.toUpperCase())

//STEP 9
// let text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG           ";
// window.alert(text.trim().toLocaleLowerCase())

//STEP 10
// let text = "the quick brown fox jumps over the lazy dog";
// let firstLetter = text.charAt(0).toUpperCase();
// let sentence = text.slice(1)
// window.alert(firstLetter+sentence);