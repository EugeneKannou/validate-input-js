/**
 * Returns password score from 1 to 4
 * If password contains spaces function returns 0
 * If password is too small or too large also returns 0
 * 
 * @param {password} string 
 */
function passwordScoring(password, minL=0, maxL=999) {
    let score = 0;

    if (/\s/.test(password) || password.length < minL || password.length > maxL){
        return score;
    }
    if (/[a-z]+/.test(password)) {
        score += 1;
    }
    if (/[A-Z]+/.test(password)) {
        score += 1;
    }
    if (/[0-9]+/.test(password)) {
        score += 1;
    }
    if (/[!@#\$%\^&\*()_\+\-=\[\]{};':"\\\|,.<>\/?]+/.test(password)) {
        score += 1;
    }
    return score;
}

/**
 * If string contains any kind of whitespaces function returns true
 * 
 * @param {string} string 
 */
function hasWhitespaces(string) {
    return /\s+/.test(string)
}

/**
 * If string is email, returns true, otherwise returns false
 * 
 * @param {email} string 
 */
function isEmail(email) {
    return /^[a-zA-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email);
}
/**
 * If string length > 0 and it contains not only space-like symbols (\n \t etc.) returns true, else returns false
 * 
 * @param {string} string 
 */
function isNotBlank(string) {
    if (string.length <= 0) return false;
    if (/^\s+$/.test(string)) return false;
    return true;
}

module.exports = {
    passwordScoring,
    hasWhitespaces,
    isEmail,
    isNotBlank
};