// Define a function to handle button clicks
function button_click(value) {
    // Get the display element
    var display = document.getElementById('display');
    
    // Check if the clear button was clicked
    if (value === 'C') {
        // Clear the display
        display.value = '';
    }
    // Check if the equal button was clicked
    else if (value === '=') {
        try {
            // Evaluate the expression and display the result
            display.value = eval(display.value);
        } catch (error) {
            // Handle any errors that occur during evaluation
            display.value = 'Error';
        }
    }
    // For all other buttons, append the button value to the display
    else {
        display.value += value;
    }
}

