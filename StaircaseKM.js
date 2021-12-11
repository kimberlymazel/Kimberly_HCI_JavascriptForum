// asks the user for the number of steps
var count = prompt("Please enter the number of steps");
stairarray = [];
var i = 0;

// loop that ask users for the cost of each step
for(i = 0; i < count; i++){
    var stair = prompt("Please enter the cost for each step");
    stairarray.push(parseInt(stair)); // turns the costs entered into an array
}

// function that calculates the minimum cost to reach the top of the staircase
function stairCost(stairarray){
    var staircase = [];
    staircase[0] = stairarray[0];
    staircase[1] = stairarray[1];
    var length = stairarray.length; // length of array used in for loop
    var j = 0;

    // for loop to calculate the total cost for the following steps
    for (j = 2; j<length; j++){
        staircase[j] = stairarray[j] + Math.min(staircase[j-1], staircase[j-2]);
        // cost of current step + lowest cost between the last two steps
    }

    var last = staircase[length-1]; // cost for last step
    var secondlast = staircase[length-2]; // cost for second last step
    var minimum = Math.min(last, secondlast); // lowest cost between second last and last steps (minimum cost)

    return minimum;
}

console.log(stairCost(stairarray));