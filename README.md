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