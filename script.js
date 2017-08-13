// Explain program to user
alert("This program will ask you for ten numbers and then calculate the average of those number. Click OK to begin")

var nums = new Array(10);

// Get input from user, check for bad input and ask again
for (var i = 0; i < 10; i++) {
    var promptIndex = i + 1
    do {
    var promptText = "Please enter number " + promptIndex
    var input = prompt(promptText, "Type here")
    var number = parseFloat(input)
    } while (isNaN(number));
    if (!isNaN(number)) {
        nums[i] = number
    }
}

// Calculate average
var sum = 0.0
for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
}
var average = sum / nums.length

// Output to user
alert("The average of the numbers you gave is: " + average)