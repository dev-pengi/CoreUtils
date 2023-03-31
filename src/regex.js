const regexs = [
    {
        type: 'email',
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,9}$/y
    },
    {
        type: 'url',
        regex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,200}\.[a-zA-Z0-9()]{2,7}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/y
    },
    {
        type: 'credit-card',
        regex: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/y
    },
    {
        type: 'ip-address-v4',
        regex: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    },
    {
        type: 'postal-code',
        regex: /^\\d{5}(?:[-\\s]\\d{4})?$/y
    },
    {
        type: 'password',
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/y
    },
    {
        type: 'username',
        regex: /^[a-zA-Z0-9._-]{3,}$/y
    },
    {
        type: 'time',
        regex: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/y
    },
    {
        type: 'hashtag',
        regex: /^#[A-Za-z0-9]+$/y
    },
];


/**
 * @typedef {'email' | 'phone' | 'url' | 'credit-card' | 'postal-code'  | 'password'  | 'username'  | 'date'  | 'time' | 'hashtag' }  RegexType
 */

/**
 * Checks if a string matches a regular expression of a specified type.
 *
 * @param {String} str - The string to match.
 * @param {RegexType} type - The type of regular expression to match against.
 * @returns {Boolean} - `true` if the entire string matches the regular expression, `false` otherwise.
 * @throws {Error} - If the `type` argument is not one of the types specified in the `regexs` array.
 */
const match = (str, type) => {
    /** @type {{ type: string, regex: string }[]} */
    const regex = regexs.find(r => r.type === type);
    if (!regex) {
      throw new Error(`Invalid type ${type}`);
    }
    const regexObj = new RegExp(regex.regex, 'y');
    return regexObj.test(str);
  }

module.exports = {
    match
}