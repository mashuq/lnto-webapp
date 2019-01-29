import passwordValidator from 'password-validator';

let PasswordValidator = {};

var schema = new passwordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(10)                                  // Maximum length 10
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().symbols()                                // Must have symbols
    .has().not().spaces()                           // Should not have spaces

PasswordValidator.validatePassword = function (password) {
    return schema.validate(password, { list: true });
}