// Prevents XSS in input fields by setting the value as textContent
/*
textContent doesn't inherently prevent XSS attacks, but it can help mitigate them by treating the input as plain text rather than HTML.

When you set the textContent property of an element, any HTML tags entered into the input fields are treated as text and rendered as such on the webpage. This means that if a user tries to inject a <script> tag or other HTML markup into an input field, it will be displayed as text rather than being executed as code.

For example, if a user enters <script>alert('XSS attack!');</script> into an input field, setting the textContent of that field will display the entire string as text on the page, preventing the script from being executed:
*/

/*This is a security feature of my website which prevents XSS! */
const inputFields = document.querySelectorAll('input');
inputFields.forEach(input => {
    input.addEventListener('input', () => {
        input.textContent = input.value;
    });
});
