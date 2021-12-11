// prompts the user for the number of letters in their message
var count = prompt("Please enter the number of letters in your decoded message");
messagearray = [];

// for loop that lets the user enter the numbers of the decoded message one by one 
for(i = 0; i < count; i++){
    var message = prompt("Please enter the decoded message by letters");
    messagearray.push(message);
}

// prompts user for key integer
var key = prompt("Please enter your key");

function decipher(messagearray, key){
    var keyarray = Array.from(String(key), Number); // converts integer key into array with each number as an element
    var result = []; // for the numerical result of the deciphering
    var length = messagearray.length-keyarray.length; // length for the repeating numbers of key

    // for loop to repeat the numbers of key until keyarray length == messagearray length
    for (i = 0; i<length; i++){
    keyarray.push(keyarray[i])
    }
    
    // for loop that pushes the deciphered numbers (after subtraction)
    for (j = 0; j < messagearray.length; j++){
        result.push(messagearray[j]-keyarray[j])
        } 
    var stringarray = [];
    
    // function to change number to alphabet
    function changenum(num){
        var alphabet = String.fromCharCode(num + 64); // + 64 as the numbers is 1 = a (not following ASCII)
        return alphabet;
        }
    
    // applies the function to each element of the result array
    result.forEach(function(i) {
        stringarray.push(changenum(i));
        });
    
    // converts array to string but since there are commas, use replace to removes commas
    var allcaps = (stringarray.toString()).replace(/,/g,"")

    // since result is all caps, use toLowerCase so that it's not all caps
    var finalresult = allcaps.toLowerCase();
    return finalresult;
}

console.log(decipher(messagearray,key));
