# validate-input-js
 
Simple library that provides functions to validate the input and password scoring without any dependencies
## Installation

` npm install validate-input `

## Usage
``` js
const v = require("validate-it");

const user = {
    email: "user@example.com",
    password: "P@ssw0rd"
};

if (v.isEmail(user.email) && v.passwordScore(user.password) >= 2) {
    // do something
}
```

## Functions

`isEmail` - If string is email, returns true, else returns false

`isNotBlank` - If string length > 0 and it contains not only space-like symbols (\n \t etc.) returns true, else returns false

`hasWhitespaces` - If string contains any kind of whitespaces function returns true

`passwordScoring` - Returns password score from 0 to 4. If password contains spaces function returns 0. If password is too small or too large also returns 0.


## Custom Validator usage
``` js
const validator = require('./index.js');

const customValidation = new validator.customValidation([
    {
        type: "regex",
        rule: "^10"
    },
    {
        type: "notInRange",
        rule: {min: 102, max: 110}
    }
]);

console.log(customValidation.validate(1010)) // true
```

## Custom validator rules
```js 
// isEqualToAny: returns true if given value passes the regex test
{
    type: "regex",
    rule: "^asdf$" // any regex
}

// isEqualToAny: returns true if given value is equal to any of given rules
{
    type: "isEqualToAny",
    rule: [1, 2, 3, 4, 5] // array of any values
}

// inRange: returns true if given value is in range
{
    type: "inRange",
    rule: {min:0, max: 10} // min and max values
}

// notInRange: returns true if given value is not in range
{
    type: "notInRange",
    rule: {min:0, max: 10} // min and max values
}

// works in the same way as described above
{
    type: "isNotBlank" | "hasWhitespaces", "isEmail";
}
```
