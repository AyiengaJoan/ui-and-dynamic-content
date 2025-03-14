// Save the reference to text-field into a variable. | <input type="text">
let input = document.getElementById("inpt");

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.getElementById("btn");

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let list = document.getElementById("list");

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let err = document.getElementById("err");

// Start function addItem.
function addItem() {

    // Create list-item and store output in a variable.
let listItem = document.createElement("li");

    // Check if user entered the value in input text-field.
    // If so:
    if (input.value){ 
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       listItem.textContent = input.value.trim();
       // Append list item to unordered list.
       list.appendChild(listItem);
       // Clear a feedback-message.
       err.textContent = '';
       // Clear the text-field.
       input.value = '';
       // Put the cursor back to text-field  
       input.focus();
    // End if. 
}
    // Otherwise:
    else {
       // Print the message nothing entered in the paragraph "feedback"
       err.textContent = "You have not entered anything!";
    // End otherwise.
}
// End function addItem.
};

// Register your function addItem for click event on button.
btn.addEventListener('click', addItem);
