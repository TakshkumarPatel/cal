const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === '=') {
            try {
                // Remove leading zeros from numbers in the expression
                expression = expression.replace(/(?<!\d)0+(?=\d)/g, '');
                
                // Evaluate the expression
                expression = eval(expression);
            } catch (error) {
                expression = "Error"; // Handle errors gracefully
            }
            input.value = expression;
        } else if (value === 'AC') {
            expression = "";
            input.value = expression;
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
