/** Regex
 * Kiểm tra định dạng email
 * Kiểm tra định dạng sđt
 */

const regex = /\w+@\w+\.com/;

console.log(regex.test('thaihao@123.com'));

const regex1 = /^\d{4}(-\d{3}){2}$/;

console.log(regex1.test('1243-1213-123'));